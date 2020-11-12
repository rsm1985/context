import React, { memo } from "react";
import Todo from "./Todo";
function List({ todos }) {
  // console.log("todos", todos);
  return (
    <div>
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default memo(List, (prevProps, nextProps) => {
  // evaluate whether the props have changed and if
  // the component should update
  return false;
});
