const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const verifyToken = require('../utils/verifyToken');
const verifyUser = require('../utils/verifyToken');
const verifyAdmin = require('../utils/verifyToken');

// Update
router.put("/update/:id", verifyUser, UserController.updateUser);

// Delete
router.delete("/:id", verifyUser, UserController.deleteUser);

// Get
router.get("/:id", verifyUser, UserController.getUser);
router.get("/", verifyAdmin, UserController.getAllUser);

module.exports = router;