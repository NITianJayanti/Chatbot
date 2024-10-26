const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://jayantimahato510:ypfkBgx4BsVxWUwS@cluster0.yncgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected :${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
