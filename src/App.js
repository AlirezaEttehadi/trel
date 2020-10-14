import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [tasks, setTasks] = useState({
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

  const onDragOver = (ev) => ev.preventDefault();

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev, category) => {
    const id = ev.dataTransfer.getData("id");

    setTasks({
      completed: [...tasks.completed, ...tasks.notCompleted].filter((task) => {
        if (category === "completed" || task.id !== id) return task;
        return null;
      }),
      notCompleted: [...tasks.completed, ...tasks.notCompleted].filter(
        (task) => {
          if (category === "notCompleted" || task.id !== id) return task;
          return null;
        }
      ),
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
