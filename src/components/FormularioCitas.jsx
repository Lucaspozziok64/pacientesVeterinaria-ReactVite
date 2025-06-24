const FormularioCitas = () => {
  return (
    <form className="container p-4 text-center text-md-start">
      <h6 className="text-center">Llena el formulario para crear una cita</h6>
      <div className="mb-3">
        <label className="form-label">
          <strong>Nombre de mascota:</strong>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ej: Budy🐶"
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
        ></input>
        <label className="form-label mx-1">
          <strong>Hora:</strong>
        </label>
        <input
          className="form-control inputFechaHora"
          id="exampleFormControlTextarea1"
          rows="3"
          type="time"
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
        ></input>
      </div>
      <div className="d-flex justify-content-end">
        <button  type="submit" className="bg-success rounded-2 text-white">Crear Cita</button>
      </div>
    </form>
  );
};

export default FormularioCitas;
