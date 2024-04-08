import {Request, Response} from "express"
import prisma from "../db/client";


export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const allGenres = await prisma.genres.findMany()
            
        res.status(200).send({
            type: "array",
            msg: "All genres",
            data: allGenres
        })

    } catch (error) {
        res.status(500).send({message: "Internal server error"})
    }
}

export const createGenre = async (req: Request, res: Response) => {
   const {name} = req.body
   if(!name){
    return res.status(400).send({message: "Error"})
   }
   try {
    const genreCreated = await prisma.genres.create({
    
        data: {
            name: name
        }
    })
    res.status(201).send({
        type: typeof genreCreated,
        msg: "Genre created",
        data: genreCreated
    })
   } catch (error) {
    
   }
}

export const updateGenre = async (req: Request, res: Response) => {
    const {name} =  req.body
    const genreId = parseInt(req.params.genreId)
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
    const genreId = parseInt(req.params.genreId)
    try {
        const genreDeleted = await prisma.genres.delete({
            where: {id: genreId}
        })
        res.status(201).send(genreDeleted)
    } catch (error) {
        res.status(400).send(error)
    }

}