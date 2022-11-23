const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/roomController');
const verifyAdmin = require('../utils/verifyToken');


// Create
router.post("/create/:hotelid", verifyAdmin, RoomController.createRoom);

// Update and Update Availability
router.put("/update/:id", verifyAdmin, RoomController.updateRoom);
router.put("/availability/:id", RoomController.updateRoomAvailability);

// Delete
router.delete("/:id/:hotelid", verifyAdmin, RoomController.deleteRoom);

// Get data
router.get("/:id", RoomController.getRoom);
router.get("/", RoomController.getAllRoom);

module.exports = router;