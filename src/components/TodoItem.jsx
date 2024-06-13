import React from "react";

const TodoItem = ({ task }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text}
    </li>
  );
};

export default TodoItem;
