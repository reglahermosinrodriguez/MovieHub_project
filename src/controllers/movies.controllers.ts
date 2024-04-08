import {Request, Response} from "express"
import prisma from "../db/client";


export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await prisma.movies.findMany()

        res.status(200).send({
            type: "array",
            msn: "All movies",
            data: allMovies
        })


        res.status(201).send(allMovies)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createMovie = async (req: Request, res: Response) => {
   const {name, image, score, genre} = req.body
   const userId = parseInt(req.params.userId)

   if (!name || !image || !score) {
    return res.status(400).send({message: "No name no image"})
   }

   if (!userId) {
    return res.status(400).send({message: "No user id"})
   }

   try {

    const movie = await prisma.$transaction( async (prisma) => {
    const newMovie = await prisma.movies.create({
        data: {
            name,
            image,
            score,
            userId,
        }
    })
    
    if(genre && genre.length) {
        const createGenres = genre.map((genreId: number) => ({
            movieId: newMovie.id, 
            genreId: genreId
        }));

    await prisma.movieGenre.createMany({
        data: createGenres       
    });
    }
    });

    res.status(201).send({message: "Create movie"})
    

   } catch (error) {
        res.status(400).send(error)

   }
}

export const updateMovie = async (req: Request, res: Response) => {
    const {name, image, score} =  req.body
    const movieId = parseInt(req.params.movieId)
    try {
        const movieUpdated = await prisma.movies.update({
            where: {id: movieId},
            data: {name,image, score }
        })
        res.status(201).send(movieUpdated)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteMovie = async (req: Request, res: Response) => {
    const movieId = parseInt(req.params.movieId)
    try {
        const movieDeleted = await prisma.movies.delete({
            where: {id: movieId}
        })
        res.status(201).send(movieDeleted)
    } catch (error) {
        res.status(400).send(error)
    }
}
