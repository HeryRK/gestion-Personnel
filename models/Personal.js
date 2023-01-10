import mongoose from "mongoose";

const Schema = mongoose.Schema

const personalSchema = new Schema({
    number:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    firstname: { 
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type:String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    familyStatus: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    service:{type:mongoose.Types.ObjectId, ref:"Service"}
}, {
    timestamps: true,

});

const Personal = mongoose.model("Personal", personalSchema);

export default Personal;