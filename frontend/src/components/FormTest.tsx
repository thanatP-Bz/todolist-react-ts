import { useEffect, useState } from "react";

interface Itodo {
  _id: number;
  todo: string;
}

const FormTest = () => {
  const [todos, setTodos] = useState<Itodo[]>([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/v1/todo");

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      console.log("error");
    }

    if (response.ok) {
      setTodos(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <ul key={item._id}>
          <li>{item.todo}</li>
        </ul>
      ))}
    </div>
  );
};

export default FormTest;
