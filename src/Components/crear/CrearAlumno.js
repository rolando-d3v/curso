import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid" 
import axios from "axios";
import css from "./crear.module.scss";

export default function CrearAlumno() {
  const [data, setData] = useState({
    id: uuidv4(),
    nombres: "",
    apellidos: "",
    fechaNac: "",
    sexo: "",
  });

  const obtenerData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log(data);
  };

  const enviarData = async (e) => {
    e.preventDefault();

    try {

      let URL = "http://localhost:5000/api/alumnos/grabar";
      const response = await axios.post(URL, data);
      //   let arrayAlumnos = await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={css.div_crear}>
      <form className={css.div_form}  onSubmit={enviarData}>
        <div className={css.div_input}>
          <label className={css.label} htmlFor="">
            Nombres{" "}
          </label>
          <input
            className={css.item_input}
            type="text"
            name="nombres"
            onChange={obtenerData}
          />
        </div>
        <div className={css.div_input}>
          <label className={css.label} htmlFor="">
            Apellidos{" "}
          </label>
          <input
            className={css.item_input}
            type="text"
            name="apellidos"
            onChange={obtenerData}
          />
        </div>
        <div className={css.div_input}>
          <label className={css.label} htmlFor="">
            Fecha de nacimiento{" "}
          </label>
          <input
            className={css.item_input}
            type="date"
            name="fechaNac"
            onChange={obtenerData}
          />
        </div>
        <div className={css.div_input}>
          <label className={css.label} htmlFor="">
            Sexo
          </label>
          <input
            className={css.item_input}
            type="text"
            name="sexo"
            onChange={obtenerData}
          />
        </div>

        <button className={css.btn} type="submit">Registrar</button>
      </form>
    </div>
  );
}
