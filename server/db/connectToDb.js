const mongoose = require("mongoose");

const connectToDb = async () => {
  const dBURL = process.env.DB_URI || "mongodb://0.0.0.0:27017/users";
  try {
    console.log(
      "MongoDB URI:",
      process.env.DB_URI || "mongodb://127.0.0.1:27017"
    );
    await mongoose.connect(dBURL);
    console.log(`Connected to DB at ${dBURL}`);
  } catch (error) {
    console.log(`Failed to connect to MongoDB`, error);
  }
};

module.exports = connectToDb;
