export const initialData = {
  title: "Thursday, Nov 25, 2021",
  tasks: {
    "task-0": {
      id: "task-0",
      content: {
        title: "Bug fixing",
        project: "Sifarish",
        description: "fix loading bug",
        priority: 3
      },
    },
    "task-1": {
      id: "task-1",
      content: {
        title: "Search implementation",
        project: "Sifarish",
        description: "Implement search in Citizen page",
        priority: 3
      },
    },
    "task-2": {
      id: "task-2",
      content: {
        title: "Conference call button add",
        project: "Optonome",
        description: "Add Conference call button in channel",
        priority: 3
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "BackLog",
      tasksId: ["task-0", "task-1", "task-2"],
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
