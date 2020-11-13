import React, { useState } from "react";
import { filterTodo, changeTodo, addNewTodo } from "./hooks";
import Input from "./components/Input";
import List from "./components/List";

const todosList = [
  { id: 1, title: "Title 1", completed: false, notes: [] },
  { id: 2, title: "Title 2", completed: false, notes: [] },
  { id: 3, title: "Title 3", completed: false, notes: [] },
];
function App() {
  const [todos, setTodos] = useState(todosList);
  const [todoValue, setTodoValue] = useState("");
  const changeTodoValue = (value) => setTodoValue(value);
  const changeTodoState = (id, state) => setTodos(changeTodo(todos, id, state));
  const removeTodo = (id) => setTodos(filterTodo(todos, id));
  const addTodo = (value) => {
    setTodos(addNewTodo(todos, value));
    setTodoValue("");
  };
  return (
    <div className="App" style={{ margin: "0 auto", width: 500 }}>
      <Input
        todoValue={todoValue}
        changeTodoValue={changeTodoValue}
        addTodo={addTodo}
      />
      <List
        todos={todos}
        changeTodoState={changeTodoState}
        removeTodo={removeTodo}
      />
    </div>
    // <TodoFunctions.Provider
    //   value={{ changeTodoValue, removeTodo, changeTodoState, addTodo }}
    // >
    //   <TodoValues.Provider
    //     value={{
    //       todos,
    //       todoValue,
    //     }}
    //   >
    //     <Content />
    //   </TodoValues.Provider>
    // </TodoFunctions.Provider>
  );
}

export default App;
