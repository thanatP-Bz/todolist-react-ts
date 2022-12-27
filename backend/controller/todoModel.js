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
  try {
    const list = await Todo.create(req.body);
    res.status(201).json({ list });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editTodo = async (req, res) => {
  res.send(`edit todolist`);
};

const deleteTodo = async (req, res) => {
  res.send(`delete Todo`);
};

export { getTodo, createTodo, editTodo, deleteTodo };
