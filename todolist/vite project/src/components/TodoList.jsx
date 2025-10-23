import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ textAlign: "center", color: "#777" }}>할 일이 없습니다.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
