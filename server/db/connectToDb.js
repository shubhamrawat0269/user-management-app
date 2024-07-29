const mongoose = require("mongoose");

const connectToDb = async () => {
  const dBURL = process.env.DB_URI;

  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@usercluster.tmocjim.mongodb.net/users?retryWrites=true&w=majority&appName=userCluster"
    );
    console.log(`Connected to DB at ${dBURL}`);
  } catch (error) {
    console.log(`Failed to connect to MongoDB`, error);
  }
};

module.exports = connectToDb;
