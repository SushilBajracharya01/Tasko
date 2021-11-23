import React, { useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";

// Components
import Column from "../../components/Column/Column";

// Styles
import { StyledTaskBoard } from "./styles/StyledTaskBoard";

function TaskBoard() {
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);
  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <StyledTaskBoard>
        <Column title="BackLog" />
        <Column title="Todo" />
        <Column title="In progress" />
        <Column title="Done" />
      </StyledTaskBoard>
    </DragDropContext>
  );
}

export default TaskBoard;
