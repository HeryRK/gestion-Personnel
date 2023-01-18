import Departement from "../models/Departement.js";
import Service from "../models/Service.js";

export const getDepartement = async (req, res, next) => {
    try {
        const departements = await Departement.find();
        return res.status(200).json(departements);
    } catch (error) {
        return res.statuts(500).json({
            message: `Unable to get departement. ERROR : ${error}`
        })
    }
}

export const getDepartementById = async(req, res, next) => {
    const id = req.params.id;
    try {
        const departement = await Departement.findById(id);
        return res.status(200).json(departement);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Departement by this ID.
            Error: ${error}`
        })    
    }
}

export const createDepartement = async(req,res,next) => {
    const id = req.params.id;
    const {name, services}= req.body;
    try {
        const departement = new Departement({name, services});
        const service = await Service.findById(services);
        service.departement.push(departement);
        await service.save();
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create new Mission` 
        }); 
    }
}

export const updateDepartement = async(req, res, next) => {
    const id= req.params.id;
    const {name, services} = req.body;
    try {
        const departement = await Departement.findByIdAndUpdate(id, {
            name, services
        });
        return res.status(202).json(departement);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Mission by this Id.
            Error: ${error}`
        })  
    }
}

export const deleteDepartement = async (req, res, next) => {
    const id = req.params.id
    try {
        const departement = await Departement.findById(id);
        const service= await Service.findById(departement.services);

        service.departements.pull(departement);
        await service.save();

        await Departement.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Mission deleted successfully`})
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete Mission by this ID`
        })
    }
}