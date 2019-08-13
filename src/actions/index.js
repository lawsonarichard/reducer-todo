export const selectTask = user => {
  console.log("You clicked on task: ", user.task);
  return {
    type: "TASK_SELECTED",
    payload: user
  };
};
