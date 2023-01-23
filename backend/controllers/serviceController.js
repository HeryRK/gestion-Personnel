import Departement from "../models/Departement.js";
import Service from "../models/Service.js";

export const getServices = async(req,res,next) => {
    try {
        const services = await Service.find();
        return res.status(200).json(services);
    } catch (error) {
        return res.status(200).json({
            message : `Unable to get services list.
            Error : ${error}`
        })
    }
}

export const getService = async(req,res,next) => {
    const id = req.params.id;
    try {
        const service = await Service.findById(id);
        return res.status(200).json(service);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to get Service by this ID.
            Error: ${error}`
        })
    }
}

export const createService = async(req,res,next) => {
    const {name, description} = req.body;
    try {
        const service = new Service({name , description});
        await service.save();
        return res.status(201).json(service);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to create new Service.
            Error: ${error}`
        })       
    }
}

export const updateService = async(req,res,next) => {
    const id = req.params.id;
    const { name, description } = req.body
    try {
        const service = await Service.findByIdAndUpdate(id,{
            name, description
        });
        return res.status(202).json(service);
    } catch (error) {
        return res.status(500).json({
            message: `Unable to update Service by this ID.
            Error: ${error}`
        })
    }
}

export const deleteService = async(req,res,next) => {
    const id = req.params.id;
    try {
        const service = await Service.findById(id);
        
        service.departements.map(async(departementId) => {
            const departement = await Departement.findById(departementId);
            departements.service = null;
            await departement.save();
        });

        await Service.findByIdAndRemove(id);
        return res.status(200).json({
            message: `Service deleted with success`
        })
    } catch (error) {
        return res.status(500).json({
            message: `Unable to delete service by this ID.
            Error: ${error}`
        })
    } 
}