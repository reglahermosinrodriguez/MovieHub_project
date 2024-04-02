import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, updateMovie } from "../controllers/movies.controllers";

const movieRouter = Router()

movieRouter.get("/", getAllMovies)
movieRouter.post("/:userId", createMovie)
movieRouter.patch("/:movieId", updateMovie)
movieRouter.delete("/:movieId", deleteMovie)

export default movieRouter