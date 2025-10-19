import React from "react";

export default function TodoList({ todos }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo, index) => (
        <li key={index} style={{ margin: "8px 0", color: "#fff" }}>
          • {todo}
        </li>
      ))}
    </ul>
  );
}
