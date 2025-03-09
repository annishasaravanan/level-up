const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

const connectDB = require("./config/db");

// Load environment variables early on
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("Welcome to Level Up");
});

// New endpoint for ChatGPT API calls
app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4-0-mini", // change this to the correct identifier for the 4-o mini model
                messages: [{ role: "user", content: message }],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.CHATGPT_API_KEY}`,
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error("ChatGPT API error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
