const Hotel = require("../models/Hotel");
// const {createError} = require("../utils/error");

class HotelController {

    // create Hotel
    createHotel = async (req, res, next) =>{
        const data = new Hotel(req.body)
        try {
            const createDataHotel = await data.save();
            res.status(200).json(createDataHotel)
        } catch (err){
            next(err)
        }
    }

    // Update Hotel
    updateHotel = async (req, res, next) => {
        try {
            const updateDataHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updateDataHotel);
        } catch (err){
            next(err);
        }
    }

    // Delete Hotel
    deleteHotel = async (req, res, next) => {
        try {
            await Hotel.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err){
            next(err);
        }
    }

    // Get Hotel by id
    getHotel = async (req, res, next) => {
        try {
            const getDataHotel = await Hotel.findById(req.params.id);
            res.status(200).json(getDataHotel);
        } catch (err){
            next(err);
        }
    }

    // Get all Hotel
    getAllHotel = async (req, res, next) => {
        try {
            const getAllDataHotel = await Hotel.find(req.params.id);
            res.status(200).json(getAllDataHotel);
        } catch (err){
            next(err);
        }
    }
}

module.exports = new HotelController;