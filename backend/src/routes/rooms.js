const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/roomController');
const verifyAdmin = require('../utils/verifyToken');

router.post("/create/:hotelid", verifyAdmin, RoomController.createRoom)
router.put("/update/:id", verifyAdmin, RoomController.updateRoom)
router.delete("/:id/:hotelid", verifyAdmin, RoomController.deleteRoom)
router.get("/:id", RoomController.getRoom)
router.get("/", RoomController.getAllRoom)

module.exports = router;