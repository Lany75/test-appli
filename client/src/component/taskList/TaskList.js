import React, { useContext } from "react";
import { TaskContext } from "../../context/taskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  console.log(tasks);
  return (
    <>
      <h2>Liste des taches</h2>
      <ul>
        <li>Faire les courses</li>
        <li>Aller au parc</li>
        <li>Dormir</li>
      </ul>
    </>
  );
};

export default TaskList;
