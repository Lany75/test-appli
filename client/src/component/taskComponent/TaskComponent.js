import React, { useContext } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import "./TaskComponent.css";
import Axios from "axios";
import { TaskContext, useTaskContext } from "../../context/taskContext";

const TaskComponent = ({ task }) => {
  const { setTasks } = useTaskContext();
  //const { setTasks } = useContext(TaskContext);

  const deleteTask = (taskId) => {
    Axios.delete(`http://localhost:8080/${taskId}`)
      .then((reponse) => {
        setTasks(reponse.data);
      })
      .catch((error) => {
        console.log("vous avez une erreur : ", error);
      });
  };

  return (
    <div className="task-component">
      <li>{task.name}</li>
      <DeleteForeverIcon
        id="btn-supp-task"
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
};

export default TaskComponent;
