import React, { memo } from "react";
import Button from "./Button";

export default function Input({ setTodoValue, addTodo, value }) {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="text"
        value={value}
        style={{ padding: 5, width: 200 }}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <div style={{ marginLeft: 20 }}>
        <Button addTodo={addTodo} value={value} />
      </div>
    </div>
  );
}
