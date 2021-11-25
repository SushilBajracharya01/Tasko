import React from "react";
import { css } from "@emotion/react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";

// Styles
import { StyledColumn } from "./styles/StyledColumn";

function Column({ column, tasks }) {
  return (
    <StyledColumn>
      <h1 className="title">{column.title}</h1>
      <div className="content">
        <Droppable droppableId={column.id} type="PERSON">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              css={css`
                border-radius: 5px;
                background-color: ${snapshot.isDraggingOver
                  ? "#c1ffb2"
                  : "#c0e7ff"};
                padding: 0.6rem 0.5rem;
                flex-grow: 1;
              `}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    index={index}
                    content={task.content}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </StyledColumn>
  );
}

export default Column;
