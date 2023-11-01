import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true); // search functionality

  mongoose
    .connect(url)
    .then(() => console.log("db connected"))
    .catch((err) => console.log(err.message));
};

export default connectDB;
