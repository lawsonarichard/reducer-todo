import React from "react";
import TodoList from "./containers/TodoList";
import TodoDetail from "./containers/TodoDetail";
const App = () => {
  return (
    <div className="App">
      <TodoList />
      <TodoDetail />
    </div>
  );
};

export default App;
