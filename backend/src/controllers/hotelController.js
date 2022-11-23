const Hotel = require("../models/Hotel");
const Room = require("../models/Room");

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
        const {min, max, ...others} = req.query;
        try {
            const getAllDataHotel = await Hotel.find({...others, cheapestPrice: {$gt: min || 1, $lt: max || 9999}}).limit(req.query.limit);
            res.status(200).json(getAllDataHotel);
        } catch (err){
            next(err);
        }
    }

    countByCity = async (req, res, next) => {
        const cities = req.query.cities.split(",")
        try {
            const list = await Promise.all(cities.map(city=>{
                return Hotel.countDocuments({city: city})
            }))
            res.status(200).json(list);
        } catch (err){
            next(err);
        }
    }

    countByType = async (req, res, next) => {
        try {
            const hotelCount = await Hotel.countDocuments({ type: "hotel"});
            const apartmentCount = await Hotel.countDocuments({ type: "apartment"});
            const resortCount = await Hotel.countDocuments({ type: "resort"});
            const villaCount = await Hotel.countDocuments({ type: "villa"});
            const cabinCount = await Hotel.countDocuments({ type: "cabin"});

            res.status(200).json([
                { type: "hotel", count: hotelCount},
                { type: "apartment", count: apartmentCount},
                { type: "resort", count: resortCount},
                { type: "villa", count: villaCount},
                { type: "cabin", count: cabinCount}
            ]);
        } catch (err){
            next(err);
        }
    }

    getHotelRooms = async(req, res, next) => {
        try {
            const hotel = await Hotel.findById(req.params.id);
            const list = await Promise.all(
                hotel.rooms.map((room) => {
                    return Room.findById(room);
                })
            )
            res.status(200).json(list);
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new HotelController;