import React from "react";

export default function Button({ addTodo, value }) {
  return <button onClick={() => addTodo(value)}>Add</button>;
}
