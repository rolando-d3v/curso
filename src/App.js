import logo from "./logo.svg";
import "./App.css";
import React from "react";
import PrimerComponent from "./Components/primerConponent/PrimerComponent";
import CrearAlumno from "./Components/crear/CrearAlumno";

function App() {
  return (
    <div className="App">
      <article  className="div_com" >
        <CrearAlumno />
        <PrimerComponent />
      </article>
    </div>
  );
}

export default App;
