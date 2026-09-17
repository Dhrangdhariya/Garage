const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Not authorized",
            });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        if (!req.user) {
            return res.status(401).json({
                message: "User not found",
            });
        }
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token",
        });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        return next();
    }

    res.status(403).json({
        message: "Not authorized as admin",
    });
};

module.exports = { protect, admin };