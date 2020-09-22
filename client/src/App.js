import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>TODO LIST</h1>
      <h2>Liste des taches</h2>
      <ul>
        <li>Faire les courses</li>
        <li>Aller au parc</li>
        <li>Dormir</li>
      </ul>
      <h2>Ajouter nouvelle tache</h2>
      <form /*action="/ajouter" method="POST"*/>
        <label for="tache">Nom de la nouvelle tache : </label>
        <input type="text" name="tache" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default App;
