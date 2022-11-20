const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/hotelController');
const verifyAdmin = require('../utils/verifyToken');

router.post("/create", verifyAdmin, HotelController.createHotel)
router.put("/update/:id", verifyAdmin, HotelController.updateHotel)
router.delete("/:id", verifyAdmin, HotelController.deleteHotel)
router.get("/:id", HotelController.getHotel)
router.get("/", HotelController.getAllHotel)

module.exports = router;