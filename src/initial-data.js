export const initialData = {
  title: "Thursday, Nov 25, 2021",
  tasks: {
    "task-1": {
      id: "task-1",
      content: {
        title: "Bug fixing",
        project: "Sifarish",
        description: "fix loading bug",
      },
    },
    "task-2": {
      id: "task-2",
      content: {
        title: "Search implementation",
        project: "Sifarish",
        description: "Implement search in Citizen page",
      },
    },
    "task-3": {
      id: "task-3",
      content: {
        title: "Conference call button add",
        project: "Optonome",
        description: "Add Conference call button in channel",
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "BackLog",
      tasksId: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "Todo",
      tasksId: [],
    },
    "column-3": {
      id: "column-3",
      title: "In progress",
      tasksId: [],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      tasksId: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};
