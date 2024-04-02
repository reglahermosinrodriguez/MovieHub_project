import { Schema, model } from "mongoose";

interface IGenreSchema {
    name: string,    
    createdAt?: Date,
    updateAt?: Date
}

const genreSchema = new Schema<IGenreSchema> ({
    name: {
        type: String,
        required: true
    },
  
}, {timestamps: true});


const GenreModel = model<IGenreSchema>("Genre", genreSchema)

export default GenreModel;