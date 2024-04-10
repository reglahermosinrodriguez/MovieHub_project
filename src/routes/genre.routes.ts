import { Router } from "express"
import { createGenres, deleteGenre, getAllGenres, updateGenre } from "../controllers/genre.controllers"

const genreRouter = Router()
genreRouter.get("/", getAllGenres)
genreRouter.post("/", createGenres)
genreRouter.patch("/:genreId", updateGenre )
genreRouter.delete("/:genreId", deleteGenre)

export default genreRouter