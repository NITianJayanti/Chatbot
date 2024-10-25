const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 2003;

app.listen(PORT, () =>
  console.log(`Server is working on PORT ${PORT}`.yellow.bold)
);
