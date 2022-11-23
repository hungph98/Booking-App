const Hotel = require('../models/Hotel');
const Room = require('../models/Room');

class RoomController {

    // create room
    createRoom = async (req, res, next) => {
        const hotelId = req.params.hotelid;
        console.log(hotelId);
        const newRoom = new Room(req.body);

        try {
            const savedRoom = await newRoom.save();
            try {
                await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}});
            } catch (err) {
                next(err);
            }
            res.status(200).json(savedRoom);
        } catch(err) {
            next(err);
        }
    }

     // Update Room
     updateRoom = async (req, res, next) => {
        try {
            const updateDataRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updateDataRoom);
        } catch (err){
            next(err);
        }
    }

    // Update Room Availabilaty
    updateRoomAvailability = async(req, res, next) => {
        try {
            await Room.updateOne(
                {"roomNumber._id": req.params.id},
                {$push: {
                    "roomNumber.$.unavailableDates": req.body.dates
                },
            });
            res.status(200).json("Room status has been updated.")
        } catch(err) {
            next(err)
        }
    }

    // Delete Room
    deleteRoom = async (req, res, next) => {
        const hotelId = req.params.hotelid;
        try {
            await Room.findByIdAndDelete(req.params.id);
            try {
                await Hotel.findByIdAndDelete(hotelId, {
                    $pull: {rooms: req.params.id}
                });
            } catch (err) {
                next(err)
            }
            res.status(200).json('Delete Successfully!');
        } catch (err){
            next(err);
        }
    }

    // Get Room by id
    getRoom = async (req, res, next) => {
        try {
            const getDataRoom = await Room.findById(req.params.id);
            res.status(200).json(getDataRoom);
        } catch (err){
            next(err);
        }
    }

    // Get all Room
    getAllRoom = async (req, res, next) => {
        try {
            const getAllDataRoom = await Room.find(req.params.id);
            res.status(200).json(getAllDataRoom);
        } catch (err){
            next(err);
        }
    }
}

module.exports = new RoomController;