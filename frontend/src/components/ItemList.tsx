import React from "react";
import SingleItem from "./SingleItem";
import { Todo } from "../components/Todo";

interface Props {
  item: Todo[];
  setItem: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ItemList: React.FC<Props> = ({ item, setItem }) => {
  return (
    <div className="md:ml-10">
      {item.map((todo) => {
        return (
          <SingleItem key={todo.id} todo={todo} item={item} setItem={setItem} />
        );
      })}
    </div>
  );
};

export default ItemList;
