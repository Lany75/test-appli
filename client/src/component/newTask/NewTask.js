import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { TaskContext } from "../../context/taskContext";

const NewTask = () => {
  const [newTask, setNewTask] = useState();
  const { setTasks } = useContext(TaskContext);

  const addTask = () => {
    axios
      .post(`http://localhost:8080/ajouter?newTask=${newTask}`)
      .then((reponse) => {
        setTasks(reponse.data);
      })
      .catch((error) => {
        console.log("vous avez une erreur : ", error);
      });
  };

  return (
    <>
      <h2>Ajouter nouvelle tache</h2>
      <div>
        <TextField
          id="new-task"
          label="nouvelle tâche"
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <Button
          id="btn-add-task"
          variant="contained"
          disableElevation
          onClick={addTask}
        >
          Ajouter
        </Button>
      </div>
    </>
  );
};

export default NewTask;
