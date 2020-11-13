import React, { memo } from "react";
import Todo from "./Todo";

function List({ todos, changeTodoState }) {
  return (
    <div>
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} changeTodoState={changeTodoState} />
      ))}
    </div>
  );
}

export default memo(List);
