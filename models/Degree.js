import mongoose from "mongoose";

const Schema = mongoose.Schema

const degreeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateObtenaid: {
        type: String,
        required: true
    },
    schoolName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type:mongoose.Types.ObjectId,
        ref:"Personal",
        required: true
    }
})

const Degree = mongoose.model("Degree", degreeSchema);

export default Degree;