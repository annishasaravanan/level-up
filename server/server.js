const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Import routes
const chatRoute = require("./routes/chat");
const recommendationsRoute = require("./routes/recommendations");

// Use routes
app.use("/api", chatRoute);
app.use("/api", recommendationsRoute);

app.get("/", (req, res) => {
    res.send("Server is running fine.");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});