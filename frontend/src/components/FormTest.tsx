import React, { useState } from "react";

const initialState = {
  todo: "",
};

const FormTest = () => {
  const [todo, setTodo] = useState(initialState);
  return (
    <form action="">
      <input placeholder="enter value" type="text" />
    </form>
  );
};

export default FormTest;
