import React from "react";
import { Draggable } from "react-beautiful-dnd";

// Styles
import { StyledTask } from "./styles/StyledTask";

function Task({ title, project }) {
  return (
    <Draggable draggableId={title} index={0}>
      {(provided, snapshot) => (
        <StyledTask
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{project}</span>
          <h2>{title}</h2>
          <p>Description</p>
        </StyledTask>
      )}
    </Draggable>
  );
}

export default Task;
