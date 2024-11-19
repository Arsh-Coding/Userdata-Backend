const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/RestFul");

    console.log("Mongo Db connected");
  } catch (err) {
    console.error("Database connection error:");
  }
};

module.exports = connectDB;
