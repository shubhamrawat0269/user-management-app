const mongoose = require("mongoose");

const connectToDb = async () => {
  const dBURL = process.env.DB_URI;

  try {
    await mongoose.connect(`${dBURL}`);
    console.log(`Connected to DB at ${dBURL}`);
  } catch (error) {
    console.log(`Failed to connect to MongoDB`, error);
  }
};

module.exports = connectToDb;
