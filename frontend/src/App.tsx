import React, { useState, useEffect } from "react";
import Form from "../src/components/Form";
import ItemList from "../src/components/ItemList";
import { Todo } from "../src/components/Todo";

const getLocalStorage = () => {
  let list = localStorage.getItem("item");
  if (list) {
    return JSON.parse(localStorage.getItem("item") || "");
  }
  return [];
};

function App() {
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Todo[]>(getLocalStorage());

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/v1/todo");

    const data = await response.json();

    if (!response.ok) {
      console.log("error");
    }

    if (response.ok) {
      setItem(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/v1/todo/create", {
      method: "POST",
      body: JSON.stringify({ todo: value }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("error");
    }

    if (response.ok) {
      setItem((prev) => [...prev, data]);
    }

    setValue("");
  };
  console.log(item);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <div className="h-screen main-color overflow-auto flex">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:mt-10 mt-2 mx-10 h-[200px]">
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
