import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";

// Components
import Column from "../../components/Column/Column";
import { initialData } from "../../initial-data";

// Styles
import { StyledTaskBoard } from "./styles/StyledTaskBoard";

// icons
// import { FcHighPriority } from "react-icons/fc";

// audio
import DropAudio from "../../assets/audio/drop.mp3";
import CheerAudio from "../../assets/audio/cheer.mp3";
import Modal from "../../components/Modal/Modal";

function TaskBoard() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [dropAudio] = useState(new Audio(DropAudio));
  const [cheerAudio] = useState(new Audio(CheerAudio));

  const [tasko, setTasko] = useState(initialData);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleShowAddTask = () => {
    setShowAddTask(true);
  };
  const handleHideAddTask = () => {
    setShowAddTask(false);
  };

  const onSubmit = (data) => {
    let timeStamp = Date.now();
    const newTasks = {
      ...tasko.tasks,
      [`task-${timeStamp}`]: {
        id: `task-${timeStamp}`,
        content: data,
      },
    };

    const newColumns = {
      ...tasko.columns,
      "column-1": {
        ...tasko.columns["column-1"],
        tasksId: [...tasko.columns["column-1"].tasksId, `task-${timeStamp}`],
      },
    };

    const newTasko = {
      ...tasko,
      tasks: newTasks,
      columns: newColumns,
    };
    setTasko(newTasko);
    handleHideAddTask();
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = tasko.columns[source.droppableId];
    const finish = tasko.columns[destination.droppableId];

    if (start === finish) {
      const newTasksId = Array.from(start.tasksId);
      newTasksId.splice(source.index, 1);
      newTasksId.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        tasksId: newTasksId,
      };
      const newTasko = {
        ...tasko,
        columns: {
          ...tasko.columns,
          [newColumn.id]: newColumn,
        },
      };
      console.log(newTasko);
      setTasko(newTasko);

      dropAudio.play();

      return;
    }

    const startTasksId = Array.from(start.tasksId);
    startTasksId.splice(source.index, 1);
    const newStart = {
      ...start,
      tasksId: startTasksId,
    };
    const finishTasksId = Array.from(finish.tasksId);
    finishTasksId.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tasksId: finishTasksId,
    };
    const newTasko = {
      ...tasko,
      columns: {
        ...tasko.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setTasko(newTasko);
    if (newFinish.title === "Done") {
      cheerAudio.play();
      return;
    }

    dropAudio.play();
    return;
  };
  return (
    <StyledTaskBoard>
      <div className="tasko-title Fredoka">{tasko.title}</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="taskboard">
          {tasko.columnOrder.map((columnId) => {
            const column = tasko.columns[columnId];
            const tasks = column.tasksId.map((taskId) => tasko.tasks[taskId]);
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </div>
      </DragDropContext>
      <div>
        <button onClick={handleShowAddTask}>Add</button>
        <Modal
          show={showAddTask}
          handleClose={handleHideAddTask}
          title="Add Task"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title</label>
            <input {...register("title")} />
            <label>Description</label>
            <input {...register("description")} />
            <label>Project</label>
            <input {...register("project")} />
            <label>Priority</label>
            <select {...register("priority")}>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
              <option value={0}>Low</option>
            </select>

            <hr />
            <button type="submit">Add</button>
          </form>
        </Modal>
      </div>
    </StyledTaskBoard>
  );
}

export default TaskBoard;
