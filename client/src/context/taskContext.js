import Axios from "axios";
import React, { createContext, useState } from "react";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState();

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
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
