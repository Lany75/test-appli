import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { TaskContext, useTaskContext } from "../../context/taskContext";
import Axios from "axios";

const NewTask = () => {
  const [newTask, setNewTask] = useState();
  const { tasks, setTasks } = useTaskContext();
  //const { tasks, setTasks } = useContext(TaskContext);

  const addTask = () => {
    if (tasks.length < 42) {
      Axios.post(`http://localhost:8080/ajouter?newTask=${newTask}`)
        .then((reponse) => {
          setTasks(reponse.data);
        })
        .catch((error) => {
          console.log("vous avez une erreur : ", error);
        });
    } else alert("nombre maximum de taches atteinte");
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
