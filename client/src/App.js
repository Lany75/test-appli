import React, { createContext } from "react";
import "./App.css";
import NewTask from "./component/newTask/NewTask";
import TaskList from "./component/taskList/TaskList";
import TaskProvider from "./context/taskContext";

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <h1>TODO LIST</h1>
        <TaskList />
        <NewTask />
      </div>
    </TaskProvider>
  );
};

export default App;
