const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://mukuljatav1010:mukuljatav1010@cluster0.qmlj6pq.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Connected to MongoDB".cyan.underline);
    });

  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
