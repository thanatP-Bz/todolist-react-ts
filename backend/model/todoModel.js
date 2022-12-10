import mongoose from "mongoose";
const { Schema } = mongoose;

const Todo = new Schema({
  todo: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Todo", Todo);
