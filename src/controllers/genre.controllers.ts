import { Request, Response } from "express"
import GenreModel from "../models/genre.models"
import MovieModel from "../models/movies.models"


export const getAllGenres = async (req: Request, res: Response) => {
    try {
        const allGenres = await GenreModel.find()
        res.status(201).send(allGenres)
    } catch (error) {
        res.status(400).send(error)
    }
}


export const createGenre = async (req: Request, res: Response) => {
    const {name} = req.body
    
    try {
         const newGenre = await GenreModel.create({name})
         res.status(201).send(newGenre)
    } catch (error) {
         res.status(400).send(error)
     
    }
 }

 export const updateMovie = async (req: Request, res: Response) => {
    const {name, image, score} = req.body
    const {movieId} = req.params
    try {
        const movieUpdated = await MovieModel.findByIdAndUpdate(
            {_id:movieId},
            {name, image, score},
            {new: true}
        )
        res.status(201).send(movieUpdated)
    } catch (error) {
        res.status(400).send(error)
        
        
    }
}

export const deleteMovie = async (req: Request, res: Response) => {
    const {movieId} = req.params
    try {
        const movieDeleted = await MovieModel.findByIdAndDelete(
            {_id:movieId}
        )
        res.status(201).send(movieDeleted)
    } catch (error) {
        res.status(400).send(error)
    }
}