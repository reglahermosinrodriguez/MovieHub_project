import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getOneMovie, updateMovie } from "../controllers/movies.controllers";

const movieRouter = Router()

movieRouter.get("/", getAllMovies)
movieRouter.get("/:movieId", getOneMovie)
movieRouter.post("/:userId", createMovie)
movieRouter.patch("/:movieId", updateMovie)
movieRouter.delete("/:movieId", deleteMovie)

export default movieRouter