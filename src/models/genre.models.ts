import { Schema, model } from "mongoose";

interface IGenreSchema {
    name: string,
}

const genreSchema = new Schema<IGenreSchema> ({
    name: {
        type: String,
        required: true
    },
  
}
)

const GenreModel = model<IGenreSchema>("Genre", genreSchema)

export default GenreModel;