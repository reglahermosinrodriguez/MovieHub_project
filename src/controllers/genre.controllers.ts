import {Request, Response} from "express"
import prisma from "../db/client";


export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const allGenres= await prisma.genres.findMany()
        res.status(201).send(allGenres)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createGenre = async (req: Request, res: Response) => {
   const {name} = req.body
   const {movieId} = req.params
   try {
        const genre = await prisma.genres.create({
            data: {name, movie: {connect: {id:movieId}}}
        })
        res.status(201).send(genre)
   } catch (error) {
        res.status(400).send(error)

   }
}

export const updateGenre = async (req: Request, res: Response) => {
    const {name} =  req.body
    const {genreId} = req.params
    try {
        const genreUpdated = await prisma.genres.update({
            where: {id: genreId},
            data: {name}
        })
        res.status(201).send(genreUpdated)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const deleteGenre = async (req: Request, res: Response) => {
    const {genreId} = req.params
    try {
        const genreDeleted = await prisma.genres.delete({
            where: {id: genreId}
        })
        res.status(201).send(genreDeleted)
    } catch (error) {
        res.status(400).send(error)
    }

}