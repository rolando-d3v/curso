import { useEffect, useState } from "react";
import axios from "axios";
import css from "./primer.module.scss";

export default function PrimerComponent() {
  const [curso, setCurso] = useState([]);

  const peticion = async () => {
    try {
      const responsex = await axios("http://localhost:5000/api/alumnos/listar");
      // let arrayAlumnos = await response.json();
      setCurso(responsex.data);
    } catch (error) {
      console.log(error);
    }
  };

  const itemDelete = async (idx) => {
    console.log(idx);

    const putMethod = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const dele = await fetch(
      `http://localhost:5000/api/alumnos/eliminar/${idx}`,
      putMethod
    );
    console.log(dele);
  };

  useEffect(() => {
    peticion();
  }, []);

  return (
    <div className={css.container}>
      <h3 className={css.title}>Lista de alumnos del curso Cjava 2022</h3>
      {curso.map((e, index) => (
        <dir key={index} className={css.card}>
          <p>
            <strong>CODIGO: </strong> {e.id}{" "}
          </p>
          <p>
            {" "}
            <strong>NOMBRE: </strong> {e.nombres}{" "}
          </p>
          <p>
            {" "}
            <strong>APELLIDOS: </strong>
            {e.apellidos}{" "}
          </p>
          <p>
            {" "}
            <strong>F NACIMIENTO: </strong>
            {e.fechaNac}{" "}
          </p>
          <p>
            {" "}
            <strong>SEXO: </strong>
            {e.sexo}{" "}
          </p>

          <div className={css.content_btn}>
            <button
              type="btn"
              onClick={() => itemDelete(e.id)}
              className={` ${css.btn}  ${css.btn_delete}`}
            >
              Eliminar
            </button>

            <button className={` ${css.btn}  ${css.btn_update}`}>Editar</button>
          </div>
        </dir>
      ))}
    </div>
  );
}
