const CardCitas = ({ cita, borrarCard }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
            <h5 className="card-tittle text-center text-md-start mb-0">
              🐶: <strong>{cita.nombre}</strong>
            </h5>
            <p className="mb-0">
              Dueño: <strong>{cita.dueño}</strong>
            </p>
          </div>
        <div className="card-body bg-info-subtle">
          <p className="card-text">
            Fecha: <strong>{cita.fecha}</strong>
          </p>
          <p className="card-text">
            Hora: <strong>{cita.hora}</strong>
          </p>
          <p className="card-text">
            Sintomas: <strong>{cita.sintoma}</strong>
          </p>
        </div>
        <div className="card-footer bg-secondary text-end">
          <button className="botonEliminar" onClick={borrarCard}>
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCitas;
