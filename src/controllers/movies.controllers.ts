import {Request, Response} from "express"
import MovieModel from "../models/movies.models"
import UserModel from "../models/users.models"

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await MovieModel.find().populate("genre")
        res.status(201).send(allMovies)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createMovie = async (req: Request, res: Response) => {
   const {name, image, score} = req.body
   const {userId} = req.params
   try {
        const newMovie = await MovieModel.create({name, image, score})
        await UserModel.findByIdAndUpdate({_id: userId}, { $push: {movies: newMovie._id}})
        res.status(201).send(newMovie)
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