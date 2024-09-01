import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  data: {
    type: String,
  },
});

export default User = mongoose.model("user", taskSchema);
