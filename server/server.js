// Load environment variables as early as possible
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const secretKey = process.env.JWT_SECRET; // This can be used later for authentication

// Connect to MongoDB
connectDB();

const chatRoute = require("./routes/chat");
const recommendationsRoute = require("./routes/recommendations");

// Mount the routes so they are accessible
app.use("/api", chatRoute);
app.use("/api", recommendationsRoute);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Level Up");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
