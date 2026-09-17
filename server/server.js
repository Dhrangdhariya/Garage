const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth_route");
const workRoutes = require("./routes/work_route");
dotenv.config();

const app = express();

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173", // Your React app
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api",workRoutes);

// Database Connection
mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/Garage")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));