import React, { memo, useContext } from "react";
import Todo from "./Todo";
import { TodoValues } from "./../context";

function List() {
  const { todos } = useContext(TodoValues);
  return (
    <div>
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default memo(List);
