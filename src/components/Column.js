import React from "react";

function Column({ name, tasks }) {
  return (
    <div className="column">
      <div>{name}</div>
      {tasks.map((task) => (
        <span draggable key={task.id}>
          {task.task}
        </span>
      ))}
    </div>
  );
}

export default Column;
