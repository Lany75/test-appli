import React from "react";
import "./App.css";
import NewTask from "./component/newTask/NewTask";
import TaskList from "./component/taskList/TaskList";

const App = () => {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TaskList />
      <NewTask />
    </div>
  );
};

export default App;
