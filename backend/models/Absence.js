import mongoose from "mongoose";

const Schema = mongoose.Schema

const absenceShema = new Schema({
    dateBegin:{
        type: String,
        required: true
    },
    dateEnding:{
        type: String,
        required: true
    },
    justification: {
        type : String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref:"Personal",
        required: true
    }
})

const Absence = mongoose.model("Absence", absenceShema);

export default Absence;