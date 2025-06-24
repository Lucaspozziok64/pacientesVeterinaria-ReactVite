const CardCitas = () => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
            <h5 className="card-tittle text-center text-md-start mb-0">
              Mascota: 
            </h5>
            <p className="mb-0">
              Dueño: 
            </p>
          </div>
        <div className="card-body bg-info-subtle">
          <p className="card-text">
            <strong>Fecha: </strong>
          </p>
          <p className="card-text">
            <strong>Hora: </strong>
          </p>
          <p className="card-text">
            <strong>Sintomas: </strong>
          </p>
        </div>
        <div className="card-footer bg-secondary text-end">
          <button className="bg-danger text-white">
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCitas;
