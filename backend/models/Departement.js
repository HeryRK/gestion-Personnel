import mongoose from "mongoose";

const Schema = mongoose.Schema

const departementScema = new Schema({
    name:{

        type: String,
        required: true 
    },
    services:{
        type: [mongoose.Types.ObjectId], ref:"Service"
    }
})

const Departement = mongoose.model("Departement", departementScema);

export default Departement;