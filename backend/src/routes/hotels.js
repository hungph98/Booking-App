const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/hotelController');
const verifyAdmin = require('../utils/verifyToken');

router.post("/create", verifyAdmin, HotelController.createHotel)
router.put("/update/:id", verifyAdmin, HotelController.updateHotel)
router.delete("/:id", verifyAdmin, HotelController.deleteHotel)
router.get("/find/:id", HotelController.getHotel)
router.get("/", HotelController.getAllHotel)

/*
// * */
router.get("/countByCity", HotelController.countByCity)
router.get("/countByType", HotelController.countByType)

module.exports = router;