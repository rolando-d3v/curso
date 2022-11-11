import { useEffect, useState } from "react";

export default function PrimerComponent() {
  const [curso, setCurso] = useState([]);

  const peticion = async () => {
    try {
      const response = await fetch("http://localhost:8086/api/cursos");
      let pop = await response.json();
      console.log(pop);
      setCurso(pop);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className="App">
      {curso.map((e, index) => (
        <dir>
          <h4>{e.id} </h4>
          <h4>{e.nombre} </h4>
          <h4>{e.creditos} </h4>
          <hr style={{ color: "black" }} />
        </dir>
      ))}
    </div>
  );
}


