const createTodo = async (req, res) => {
  res.send(`create todolist`);
};

const editTodo = async (req, res) => {
  res.send(`edit todolist`);
};

const deleteTodo = async (req, res) => {
  res.send(`delete Todo`);
};

export { createTodo, editTodo, deleteTodo };
