const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  console.log("Requested ID:", req.params.id);
  console.log(
    "Available IDs:",
    chats.map((c) => c._id)
  );

  const singleChat = chats.find((c) => c._id === req.params.id);

  if (!singleChat) {
    return res.status(404).send({ message: "Chat not found" });
  }

  res.send(singleChat);
});

const PORT = process.env.PORT || 2003;

app.listen(PORT, () => console.log(`Server is working on PORT ${PORT}`));
