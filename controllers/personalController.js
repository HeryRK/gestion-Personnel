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