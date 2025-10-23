
  import { useState } from "react";

  function todoItem from "./todoItem";
  
  (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 0",
        borderBottom: "1px solid #eee"
      }}
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#999" : "#000",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
        삭제
      </button>
    </li>
  );


export default TodoItem;
