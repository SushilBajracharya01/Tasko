import React from "react";
import { css } from "@emotion/react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";

// Styles
import { StyledColumn } from "./styles/StyledColumn";

function Column({ title }) {
  return (
    <StyledColumn>
      <h1 className="title">{title}</h1>
      <div className="content">
        <Droppable droppableId={title} type="PERSON">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              css={css`
                border-radius: 5px;
                background-color: ${snapshot.isDraggingOver
                  ? "#c1ffb2"
                  : "#c0e7ff"};
                padding: 0.6rem 0.5rem;
              `}
              {...provided.droppableProps}
            >
              <Task title={`${title}`} project={`${title} project`} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </StyledColumn>
  );
}

export default Column;
