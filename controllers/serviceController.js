import Service from "../models/Service.js";

export const getServiceController = async(req,res,next) => {
    try {
        const services = await Service.find();
        return res.status(200).json(services);
    } catch (error) {
        console.log(error);
    }
}

