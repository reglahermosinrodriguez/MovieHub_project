import express from "express";
import { json } from "body-parser";
import userRouter from "./routes/user.routes";
import movieRouter from "./routes/movies.routes";
import genreRouter from "./routes/genre.routes";

const app = express ();
app.use(
    json(
        {limit: "50mb"}
    )
)

app.use(express.json());
app.use("/user", userRouter)
app.use("/movie", movieRouter)
app.use("/genre", genreRouter)

export default app;