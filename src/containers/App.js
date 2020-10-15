import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { produce } from "immer";

import Column from "../components/Column";

function App(props) {
  const [board, setBoard] = useState({
    columns: [
      {
        id: 1,
        priority: 1,
        name: "to do",
        tasks: [
          { id: 1, task: "Go gym", status: "notCompleted" },
          { id: 2, task: "Go bookstore", status: "notCompleted" },
          { id: 3, task: "Go shopping", status: "notCompleted" },
          { id: 4, task: "Go pool", status: "notCompleted" },
        ],
      },
      {
        id: 2,
        priority: 2,
        name: "doing",
        tasks: [
          { id: 5, task: "Go gym", status: "notCompleted" },
          { id: 6, task: "Go bookstore", status: "notCompleted" },
          { id: 7, task: "Go shopping", status: "notCompleted" },
          { id: 8, task: "Go pool", status: "notCompleted" },
        ],
      },
    ],
  });
  const onDragEnd = (data) => {
    console.log(data);
    const taskId = data.draggableId.split("-")[1];
    const columnId = data.source.droppableId.split("-")[1];
    const sourceColumnIndex = board.columns.findIndex(
      (col) => col.id === Number(columnId)
    );
    const sourceTaskIndex = board.columns[sourceColumnIndex].tasks.findIndex(
      (t) => t.id === Number(taskId)
    );
    const destinationColumnIndex = board.columns.findIndex(
      (col) => col.id === Number(data.destination.droppableId.split("-")[1])
    );
    const destinationTaskIndex = data.destination.index;
    const _board = produce(board, (draftState) => {
      const selectedTask = draftState.columns[sourceColumnIndex].tasks.splice(
        sourceTaskIndex,
        1
      )[0];
      draftState.columns[destinationColumnIndex].tasks.splice(
        destinationTaskIndex,
        0,
        selectedTask
      );
    });

    console.log(_board);
    setBoard(_board);
  };

  const a = {
    c: {
      d: {},
    },
  };
  return (
    <div className="container">
      <DragDropContext onDragEnd={onDragEnd}>
        {board.columns.map((column) => (
          <Column
            id={column.id}
            name={column.name}
            tasks={column.tasks}
          ></Column>
        ))}
      </DragDropContext>
    </div>
  );
}

export default App;
