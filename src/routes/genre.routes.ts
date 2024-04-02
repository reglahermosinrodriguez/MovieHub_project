import { Router } from "express"
import { createGenre, getAllGenres } from "../controllers/genre.controllers"

const genreRouter = Router()
genreRouter.get("/", getAllGenres )
genreRouter.post("/", createGenre)

export default genreRouter