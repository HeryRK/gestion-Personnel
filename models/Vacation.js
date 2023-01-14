import mongoose from "mongoose";

const Schema = mongoose.Schema

const vacationSchema = new Schema({
    dateBegin: {
        type : String,
        required : true
    },
    dateEnding : {
        type : String,
        required : true
    },
    owner : {
        type: mongoose.Types.ObjectId, ref:"Personal"
    }
})

const Vacation = mongoose.model("Vacation", vacationSchema);

export default Vacation;