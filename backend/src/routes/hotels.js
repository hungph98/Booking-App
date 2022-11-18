const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/hotelController');

router.post("/create", HotelController.createHotel)
router.put("/update/:id", HotelController.updateHotel)
router.delete("/:id", HotelController.deleteHotel)
router.get("/:id", HotelController.getHotel)
router.get("/", HotelController.getAllHotel)

module.exports = router;