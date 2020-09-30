import React, { useContext } from "react";
import { TaskContext, useTaskContext } from "../../context/taskContext";
import TaskComponent from "../taskComponent/TaskComponent";

import "./TaskList.css";

const TaskList = () => {
  const { tasks } = useTaskContext();
  //const { tasks } = useContext(TaskContext);

  return (
    <>
      <h2>Liste des taches</h2>
      {tasks &&
        (tasks.length > 0 ? (
          <ul id="task-list">
            {tasks &&
              tasks.map((t) => {
                return (
                  <TaskComponent
                    className="task-component"
                    key={t.id}
                    task={t}
                  />
                );
              })}
          </ul>
        ) : (
          <div id="task-list">Pas encore de tache</div>
        ))}
    </>
  );
};

export default TaskList;
