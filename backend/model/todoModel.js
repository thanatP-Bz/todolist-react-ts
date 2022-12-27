import mongoose from "mongoose";
const { Schema } = mongoose;

const Todo = new Schema({
  todo: String,
});

export default mongoose.model("Todo", Todo);
