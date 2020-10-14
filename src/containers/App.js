import React, { useState } from "react";
import Column from "../components/Column";

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
        <Column name={column.name} tasks={column.tasks}></Column>
      ))}
    </div>
  );
}

export default App;
