import express from "express";
import userRouter from "./routes/user.routes";
import movieRouter from "./routes/movies.routes";
import genreRouter from "./routes/genre.routes";

const app = express ();

app.use(express.json());
app.use("/user", userRouter)
app.use("/movie", movieRouter)
app.use("/genre", genreRouter)

export default app;