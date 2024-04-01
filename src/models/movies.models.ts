import { Schema, model } from "mongoose";

interface IMovieSchema {
    name: String,
    image: String
}


const userSchema = new Schema<IMovieSchema> ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});


const UserModel = model<IMovieSchema>("User", userSchema)

export default UserModel;