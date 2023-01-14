import Personal from "../models/Personal.js";

export const getPersonalController = async(req,res,next) => {
    try {

        const personals = await Personal.find();
        return res.status(200).json(personals);
        
    } catch (error) {
        console.log(error);
    }
}

export const addPersonalController = async(req, res, next) => {
    try {
        const newPersonals = new Personal(req.body);
        await newPersonals.save(); 
        return res.status(200).send("Personal created successfully!");
    } catch (error) {
        console.log(error);
    }
}

export const removePersonalController = async(req, res, next) => {
    const id = req.params.id;
    try {
        await Personal.findByIdAndRemove(id);
        return res.status(200).json("Personal deleted successfully!");
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const updatePersonalController = async(req, res, next) => {
    const id = req.params.id;
    const {number,name,firstname,adress,cin,dateOfBirth,photo,familyStatus,nationality,phoneNumber,sexe}=req.body;
    try {
        const personal = await Personal.findByIdAndUpdate(id,{number,name,firstname,adress,cin,dateOfBirth,photo,familyStatus,nationality,phoneNumber,sexe});
        await personal.save();
        return res.status(202).json("Personal updated successfully!");
    } catch (error) {
        return res.status(500).json(error);
    }
}
