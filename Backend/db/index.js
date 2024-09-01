import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDb = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGO_URI}${DB_NAME}`
    );
    console.log("mongodb connected ");
  } catch (error) {
    console.log("getting error on connection", error);
    process.exit(1);
  }
};
export default ConnectDb