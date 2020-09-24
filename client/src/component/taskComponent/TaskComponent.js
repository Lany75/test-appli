import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import "./TaskComponent.css";

const TaskComponent = ({ name }) => {
  return (
    <div className="task-component">
      <li>{name}</li>
      <DeleteForeverIcon id="btn-supp-task" />
    </div>
  );
};

export default TaskComponent;
