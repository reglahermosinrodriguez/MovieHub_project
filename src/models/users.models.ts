import { Schema, model } from "mongoose";

interface IUserSchema {
    name: string,
    email: string,
    password: string,
    movies: [],
    createdAt?: Date,
    updateAt?: Date
}


const userSchema = new Schema<IUserSchema> ({
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
    movies: [{
        type: Schema.Types.ObjectId, ref:"Movie"
    }]
}, {timestamps: true});


const UserModel = model<IUserSchema>("User", userSchema)

export default UserModel;