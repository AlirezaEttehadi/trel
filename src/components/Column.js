import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

function Column({ name, tasks, id }) {
  return (
    <Droppable droppableId={`droppable-${id}`} type="PERSON">
      {(provided, snapshot) => (
        <div
          className="column"
          ref={provided.innerRef}
          style={{ backgroundColor: snapshot.isDraggingOver ? "blue" : "grey" }}
          {...provided.droppableProps}
        >
          <div>{name}</div>
          {tasks.map((task, index) => (
            <Draggable draggableId={`draggble-${task.id}`} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className="task" key={task.id}>
                    {task.task}
                  </div>
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
