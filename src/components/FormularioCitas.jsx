import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const FormularioCitas = ({ agregarCita }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const cargarCard = (data) => {
    const { inputNombre, inputDueño, inputFecha, inputHora, inputSintomas } =
      data;
    agregarCita(inputNombre, inputDueño, inputHora, inputFecha, inputSintomas);
    reset();
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Cita creada exitosamente",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(cargarCard)}
      className="container p-4 text-center text-md-start"
    >
      <h6 className="text-center">Llena el formulario para crear una cita</h6>
      <div className="mb-2">
        <label className="form-label">
          <strong>Nombre de mascota:</strong>
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="ej: Budy🐶"
          {...register("inputNombre", {
            required: "EL nombre es un dato obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener 3 caracteres como minimo",
            },
            maxLength: {
              value: 10,
              message: "El nombre debe contener como maximo 10 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/,
              message:
                "El nombre debe contener caracteres alfanumericos mayusculas o minusculas",
            },
          })}
        />
      </div>
      <div>
        <span className="bg-danger text-white">
          {errors.inputNombre?.message}
        </span>
      </div>
      <div className="mb-2">
        <label className="form-label">
          <strong>Nombre dueño:</strong>
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          type="text"
          placeholder="ej: Juan"
          {...register("inputDueño", {
            required: "Su nombre es un dato obligatorio",
            minLength: {
              value: 4,
              message: "su nombre debe tener 4 caracteres como minimo",
            },
            maxLength: {
              value: 10,
              message: "Su nombre debe contener como maximo 10 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/,
              message:
                "Su nombre debe contener caracteres alfanumericos mayusculas o minusculas",
            },
          })}
        ></input>
      </div>
      <div>
        <span className="bg-danger text-white">
          {errors.inputDueño?.message}
        </span>
      </div>
      <div className="mb-0 d-flex justify-content-center align-items-center">
        <label className="form-label">
          <strong>Fecha:</strong>
        </label>
        <input
          className="form-control inputFechaHora mx-1"
          id="exampleFormControlTextarea1"
          type="date"
          {...register("inputFecha", {
            required: "La fecha es un dato obligatorio",
          })}
        ></input>
        <label className="form-label mx-1">
          <strong>Hora:</strong>
        </label>
        <input
          className="form-control inputFechaHora"
          id="exampleFormControlTextarea1"
          type="time"
          {...register("inputHora", {
            required: "La hora es un dato obligatorio",
          })}
        ></input>
      </div>
      <div>
        <span className="bg-danger text-white">
          {errors.inputFecha?.message}
        </span>
        <span className="bg-danger text-white m-1">
          {errors.inputHora?.message}
        </span>
      </div>
      <div className="mb-2">
        <label className="form-label">
          <strong>Sintomas:</strong>
        </label>
        <input
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          type="text"
          placeholder="Describir sintomas"
          {...register("inputSintomas", {
            required: "El sintoma es un dato obligatorio",
            minLength: {
              value: 4,
              message: "El sintoma debe tener 10 caracteres como minimo",
            },
            maxLength: {
              value: 30,
              message: "El sintoma debe contener como maximo 30 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/,
              message:
                "La descripcion contener caracteres alfanumericos mayusculas o minusculas",
            },
          })}
        ></input>
      </div>
      <div>
        <span className="bg-danger text-white">
          {errors.inputSintomas?.message}
        </span>
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
