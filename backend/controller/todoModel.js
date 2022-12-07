import Todo from "../model/todoModel.js";

const createTodo = async (req, res) => {
  try {
    const list = await Todo.create(req.body);
    res.status(201).json({ list });
  } catch (error) {
    /*  res.status(500).json({ msg: "something went wrong" }); */
    console.log(error);
  }
};

const editTodo = async (req, res) => {
  res.send(`edit todolist`);
};

const deleteTodo = async (req, res) => {
  res.send(`delete Todo`);
};

export { createTodo, editTodo, deleteTodo };
