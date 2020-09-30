import Axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const useTaskContext = () => useContext(TaskContext);

const defaultValues = [
  { name: "default task", id: "1c12eded-33bb-44b5-ad56-c6e78978c911" },
];
export const TaskContext = createContext(defaultValues);

//export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

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
