import React, { FormEvent, useState } from "react";

const FormTest = () => {
  const [todos, setTodos] = useState<string>("");

  const number = 3;

  const handlerSumbit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/v1/todo/", {
      method: "POST",
      body: JSON.stringify({ todo: todos, number: number }),

      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("error");
    }

    if (response.ok) {
      console.log("item Added", data);
    }

    setTodos("");
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodos(e.target.value);
  };

  return (
    <form onSubmit={handlerSumbit}>
      <input
        placeholder="enter value"
        value={todos}
        type="text"
        name="todo"
        onChange={handlerChange}
      />
    </form>
  );
};

export default FormTest;
