import mongoose from "mongoose";

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    nameService: {
        type: String,
        required: true
    },
    codeService: {
        type: String,
        required: true
    },
    ownerService: {
        type:mongoose.Types.ObjectId, ref:"Personal"
    }
})

const Service = mongoose.model("Service", serviceSchema);

export default Service;