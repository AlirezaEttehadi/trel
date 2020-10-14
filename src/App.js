import React, { useState } from "react";
import "./App.css";

function App(props) {
  let [tasks, setTasks] = useState({
    notCompleted: [
      { id: 1, task: "Go gym", status: "notCompleted" },
      { id: 3, task: "Go bookstore", status: "notCompleted" },
      { id: 4, task: "Go shopping", status: "notCompleted" },
      { id: 6, task: "Go pool", status: "notCompleted" },
    ],
    completed: [
      { id: 2, task: "Go home", status: "completed" },
      { id: 5, task: "Go school", status: "completed" },
    ],
  });

  let onDragOver = (ev) => ev.preventDefault();

  let onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  let onDrop = (ev, category) => {
    let id = ev.dataTransfer.getData("id");

    setTasks({
      completed: [...tasks.completed, ...tasks.notCompleted].filter((task) => {
        if (category === "completed" || task.id !== id) return task;
        return null;
      }),
      notCompleted: [...tasks.completed, ...tasks.notCompleted].filter((task) => {
        if (category === "notCompleted" || task.id !== id) return task;
        return null;
      }),
    });
  };

  return (
    <div className="container">
      <div
        className="column"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "notCompleted")}
      >
        {tasks.notCompleted.map((task) => (
          <span
            draggable
            key={task.id}
            onDragStart={(e) => onDragStart(e, task.id)}
          >
            {task.task}
          </span>
        ))}
      </div>
      <div
        className="column"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "completed")}
      >
        {tasks.completed.map((task) => (
          <span
            draggable
            key={task.id}
            onDragStart={(e) => onDragStart(e, task.id)}
          >
            {task.task}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
