import { Schema, model } from "mongoose";

interface IMovieSchema {
    name: String,
    image: String,
    score: Number,
    genre: [],
    createdAt?: Date,
    updateAt?: Date
}


const movieSchema = new Schema<IMovieSchema> ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    genre: [{
        type: Schema.Types.ObjectId, ref:"Genre"
    }]
  
}, {timestamps: true});


const MovieModel = model<IMovieSchema>("Movie", movieSchema)

export default MovieModel;