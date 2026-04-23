import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text" 
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput;