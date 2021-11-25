import React from "react";
import { Draggable } from "react-beautiful-dnd";

// Styles
import { StyledTask } from "./styles/StyledTask";

function Task({ content, id, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <StyledTask
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>{content.project}</span>
          <h2>{content.title}</h2>
          <p>
            Description:
            <span className="description">{content.description}</span>
          </p>
        </StyledTask>
      )}
    </Draggable>
  );
}

export default Task;
