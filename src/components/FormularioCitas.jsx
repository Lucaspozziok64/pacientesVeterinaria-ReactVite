import { useState } from "react";

const FormularioCitas = ({ agregarCita }) => {
  const [nombre, setNombre] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintoma, setSintoma] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita(nombre, dueño, fecha, hora, sintoma)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container p-4 text-center text-md-start"
    >
      <h6 className="text-center">Llena el formulario para crear una cita</h6>
      <div className="mb-3">
        <label className="form-label">
          <strong>Nombre de mascota:</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ej: Budy🐶"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          <strong>Nombre dueño:</strong>
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="ej: Juan"
          onChange={(e) => setDueño(e.target.value)}
          value={dueño}
        ></input>
      </div>
      <div className="mb-3 d-flex justify-content-center align-items-center">
        <label className="form-label">
          <strong>Fecha:</strong>
        </label>
        <input
          className="form-control inputFechaHora mx-1"
          id="exampleFormControlTextarea1"
          rows="3"
          type="date"
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
        ></input>
        <label className="form-label mx-1">
          <strong>Hora:</strong>
        </label>
        <input
          className="form-control inputFechaHora"
          id="exampleFormControlTextarea1"
          rows="3"
          type="time"
          onChange={(e) => setHora(e.target.value)}
          value={hora}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">
          <strong>Sintomas:</strong>
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          type="text"
          placeholder="Describir sintomas"
          onChange={(e) => setSintoma(e.target.value)}
          value={sintoma}
        ></input>
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="bg-success rounded-2 text-white">
          Crear Cita
        </button>
      </div>
    </form>
  );
};

export default FormularioCitas;
