import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";
import TaskComponent from "../taskComponent/TaskComponent";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <>
      <h2>Liste des taches</h2>
      <ul>
        {tasks &&
          tasks.map((t, index) => {
            return <TaskComponent key={index} name={t.name} />;
          })}
      </ul>
    </>
  );
};

export default TaskList;
