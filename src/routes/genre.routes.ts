import { Router } from "express"
import { createGenre, deleteGenre, getAllGenres, updateGenre } from "../controllers/genre.controllers"

const genreRouter = Router()
genreRouter.get("/", getAllGenres)
genreRouter.post("/", createGenre)
genreRouter.patch("/:movieId", updateGenre )
genreRouter.delete("/:genreId", deleteGenre)

export default genreRouter