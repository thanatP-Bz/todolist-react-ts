import mongoose from "mongoose";
import Todo from "../model/todoModel.js";

const getTodo = async (req, res) => {
  try {
    const list = await Todo.find({});
    res.status(200).json(list);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createTodo = async (req, res) => {
  const { todo } = req.body;

  try {
    const list = await Todo.create({ todo });
    res.status(201).json({ list });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editTodo = async (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  try {
    const list = await Todo.findByIdAndUpdate(
      { _id: id },
      { todo },
      { new: true }
    );
    res.status(201).json({ list });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "the id not found" });
  }

  const list = await Todo.findByIdAndDelete({ _id: id });
  res.status(200).json(list);
};

export { getTodo, createTodo, editTodo, deleteTodo };
