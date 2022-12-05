const User = require('../models/User');
const bcrypt = require("bcrypt");
const createError = require('../utils/error');
const jwt = require('jsonwebtoken');

class AuthController{
    register = async (req, res, next) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            const passwordHash = bcrypt.hashSync(req.body.password, salt)
            const data = new User({
                username: req.body.username,
                email: req.body.email,
                password: passwordHash,
            });
            await data.save();
            res.status(200).json("User has been created!");
        } catch (err) {
            next(err)
        }
    }
    login = async (req, res, next) => {
        try {
            const user = await User.findOne({username: req.body.username});
            if (!user) {
                return next(createError(404, "User not found!"));
            }

            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
            if (!isPasswordCorrect) {
                return next(createError(400, "Wrong password or username!"));
            }

            const token = jwt.sign({ id:user._id, isAdmin:user.isAdmin}, process.env.JWT);
            const { password, isAdmin, ...otherDetails } = user._doc;
            res.cookie("access_token", token, { httpOnly: true}).status(200).json({detail:{...otherDetails},isAdmin, token});
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new AuthController;