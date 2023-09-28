import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // connect to mongodb database
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
