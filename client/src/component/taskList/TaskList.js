import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import TaskComponent from "../taskComponent/TaskComponent";

const TaskList = ({ tasks }) => {
  //const { tasks } = useContext(TaskContext);
  //const tasks = props.tasks;

  return (
    <>
      <h2>Liste des taches</h2>
      <ul>
        {tasks &&
          tasks.map((t, index) => {
            return (
              <TaskComponent
                className="task-component"
                key={index}
                name={t.name}
              />
            );
          })}
      </ul>
    </>
  );
};

export default TaskList;
