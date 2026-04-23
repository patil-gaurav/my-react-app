import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function TodoApp() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text
    };
    setTodos([...todos, newTodo]);
  }

  function onDelete(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default TodoApp;