const User = require("../../db/models/User");


exports.signup = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json(newUser);
    } catch(error) {
        next(error);
    }

};