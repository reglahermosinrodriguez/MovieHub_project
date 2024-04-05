import {Request, Response} from "express"
import prisma from "../db/client";


export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await prisma.movies.findMany()
        res.status(201).send(allMovies)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createMovie = async (req: Request, res: Response) => {
   const {name, image, score} = req.body
   const userId = parseInt(req.params.userId)
   try {
        const movie = await prisma.movies.create({
            data: {name, image, score, user: {connect : {id:userId}}}
        });
        res.status(201).send(movie)
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
