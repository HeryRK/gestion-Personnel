import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    userId : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    verified : {
        type: Boolean
    }
});

const User = mongoose.model("User", userSchema);

export default User;