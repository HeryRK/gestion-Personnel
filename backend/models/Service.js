import mongoose from "mongoose";

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    nameService: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    departement: {
        type: mongoose.Types.ObjectId, ref:"Departement"
    }
})

const Service = mongoose.model("Service", serviceSchema);

export default Service;