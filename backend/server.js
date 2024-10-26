// Load environment variables

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./Routes/userRoutes");

// Connect to database
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 2003;

app.listen(PORT, () =>
  console.log(`Server is working on PORT ${PORT}`.yellow.bold)
);
