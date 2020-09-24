import Axios from "axios";
import React, { useContext, useState } from "react";
import "./App.css";
import NewTask from "./component/newTask/NewTask";
import TaskList from "./component/taskList/TaskList";
import TaskProvider, { TaskContext } from "./context/taskContext";

const App = () => {
  const [tasks, setTasks] = useState([]);
  // const { tasks } = useContext(TaskContext);

  const getTaskList = () => {
    Axios.get(`http://localhost:8080/`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("vous avez une erreur: ", error);
      });
  };

  React.useEffect(() => {
    getTaskList();
  }, []);

  return (
    // <TaskProvider>
    <div className="App">
      <h1>TODO LIST</h1>
      <TaskList id="task-list" tasks={tasks} />
      <NewTask id="new-task" />
    </div>
    // </TaskProvider>
  );
};

export default App;
