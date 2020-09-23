import React from "react";

const NewTask = () => {
  return (
    <>
      <h2>Ajouter nouvelle tache</h2>
      <form /*action="/ajouter" method="POST"*/>
        <label /*for="tache"*/>Nom de la nouvelle tache : </label>
        <input type="text" name="tache" />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default NewTask;
