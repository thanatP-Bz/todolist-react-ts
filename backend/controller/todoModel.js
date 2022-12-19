import Todo from "../model/todoModel.js";

const createTodo = async (req, res) => {
  const { todo } = req.body;

  console.log(todo);
  try {
    const list = await Todo.create({ todo });
    res.status(201).json(list);
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

export { createTodo, editTodo, deleteTodo };
