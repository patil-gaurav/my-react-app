import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete}) {

  return (
    <div>
      <h3>Todo List</h3>

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList;