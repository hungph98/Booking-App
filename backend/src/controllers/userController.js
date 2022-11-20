const User = require("../models/User");

class UserController {

    // Update User
    updateUser = async (req, res, next) => {
        try {
            const updateDataUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
            res.status(200).json(updateDataUser);
        } catch (err){
            next(err);
        }
    }

    // Delete User
    deleteUser = async (req, res, next) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Delete Successfully!');
        } catch (err){
            next(err);
        }
    }

    // Get User by id
    getUser = async (req, res, next) => {
        try {
            const getDataUser = await User.findById(req.params.id);
            res.status(200).json(getDataUser);
        } catch (err){
            next(err);
        }
    }

    // Get all User
    getAllUser = async (req, res, next) => {
        try {
            const getAllDataUser = await User.find(req.params.id);
            res.status(200).json(getAllDataUser);
        } catch (err){
            next(err);
        }
    }
}

module.exports = new UserController;