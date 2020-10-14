import React, { useState } from "react";

function App(props) {
  const [board, setBoard] = useState({
    columns: [
      {
        priority: 1,
        name: "to do",
        tasks: [
          { id: 1, task: "Go gym", status: "notCompleted" },
          { id: 3, task: "Go bookstore", status: "notCompleted" },
          { id: 4, task: "Go shopping", status: "notCompleted" },
          { id: 6, task: "Go pool", status: "notCompleted" },
        ],
      },
      {
        priority: 2,
        name: "doing",
        tasks: [
          { id: 1, task: "Go gym", status: "notCompleted" },
          { id: 3, task: "Go bookstore", status: "notCompleted" },
          { id: 4, task: "Go shopping", status: "notCompleted" },
          { id: 6, task: "Go pool", status: "notCompleted" },
        ],
      },
    ],
  });

  return (
    <div className="container">
      {board.columns.map((column) => (
        <div
          className="column"
          // onDragOver={(e) => onDragOver(e)}
          // onDrop={(e) => onDrop(e, "notCompleted")}
        >
          {column.tasks.map((task) => (
            <span
              draggable
              key={task.id}
              // onDragStart={(e) => onDragStart(e, task.id)}
            >
              {task.task}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
