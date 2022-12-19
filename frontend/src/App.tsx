import React, { useState, useEffect } from "react";
import Form from "../src/components/Form";
import ItemList from "../src/components/ItemList";
import { Todo } from "../src/components/Todo";
import FormTest from "./components/FormTest";

const getLocalStorage = () => {
  let list = localStorage.getItem("item");
  if (list) {
    return JSON.parse(localStorage.getItem("item") || "");
  }
  return [];
};

function App() {
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Todo[]>([]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const itemTodo = { id: Date.now(), todo: value, isDone: false };

    if (value) {
      setItem([...item, itemTodo]);
    }

    const response = await fetch("http://localhost:5000/api/v1/todo/", {
      method: "POST",
      body: JSON.stringify(""),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("error");
    }

    if (response.ok) {
      console.log("item Added", data);
    }

    setValue("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="h-screen main-color overflow-auto flex">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:mt-10 mt-2 mx-10 h-[200px]">
        <FormTest />
        <div className="w-full max-w-[500px] mx-auto">
          <Form
            value={value}
            changeHandler={changeHandler}
            submitHandler={submitHandler}
          />
        </div>

        <div>
          <ItemList item={item} setItem={setItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
