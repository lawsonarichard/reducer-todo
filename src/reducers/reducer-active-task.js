export default function(state = null, action) {
  switch (action.type) {
    case "TASK_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
// takes in an action and renders it
