import {Request, Response} from "express"
import MovieModel from "../models/movies.models"
import UserModel from "../models/users.models"

export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const allMovies = await MovieModel.find()
        res.status(201).send(allMovies)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const createMovie = async (req: Request, res: Response) => {
   const {name, image} = req.body
   const {userId} = req.params
   try {
        const newMovie = await MovieModel.create({name, image})
        await UserModel.findByIdAndUpdate({_id: userId}, { $push: {movies: newMovie._id}})
        res.status(201).send(newMovie)
   } catch (error) {
        res.status(400).send(error)
    
   }
}