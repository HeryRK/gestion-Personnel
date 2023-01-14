import mongoose from "mongoose";

const Schema = mongoose.Schema

const contractSchema = new Schema({
    name:{

    },
    description:{

    },
    dateBegin: {

    },
    dateEnding: {

    },
    owner:{
        type : mongoose.Types.ObjectId, ref:"Personal",
        required: true
    }
})

const Contract = mongoose.model("Contract", contractSchema);

export default Contract;