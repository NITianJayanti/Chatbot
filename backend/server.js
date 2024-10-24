const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // Log the requested ID and available IDs for debugging
  console.log("Requested ID:", req.params.id);
  console.log(
    "Available IDs:",
    chats.map((c) => c._id)
  );

  // Find the chat by ID
  const singleChat = chats.find((c) => c._id === req.params.id);

  // Check if the chat was found
  if (!singleChat) {
    // Send a 404 response if chat not found
    return res.status(404).send({ message: "Chat not found" });
  }

  // Send the chat data if found
  res.send(singleChat);
});

const PORT = process.env.PORT || 2003;

app.listen(2003, () => console.log(`Server is working on PORT ${PORT}`));
