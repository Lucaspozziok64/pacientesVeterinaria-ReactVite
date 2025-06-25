import { useEffect, useState } from "react";
import "./App.css";
import CardCitas from "./components/CardCitas";
import FormularioCitas from "./components/FormularioCitas";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

function App() {
  const citasGuardadas = JSON.parse(localStorage.getItem("agendaCitas")) || [];
  const [citas, setCitas] = useState(citasGuardadas);

  const agregarCita = (
    nuevoNombre,
    nuevoDueño,
    nuevoHora,
    nuevoFecha,
    nuevoSintoma
  ) => {
    const nuevaCita = {
      id: Date.now(),
      nombre: nuevoNombre,
      dueño: nuevoDueño,
      fecha: nuevoFecha,
      hora: nuevoHora,
      sintoma: nuevoSintoma,
    };
    setCitas([...citas, nuevaCita]);
  };

  useEffect(() => {
    localStorage.setItem("agendaCitas", JSON.stringify(citas));
  }, [citas]);

  const borrarCard = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar esta cita?",
      text: "No podras revertir la tarjeta!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCitas(citas.filter((cita) => cita.id !== id));
        Swal.fire({
          title: "Cita eliminada!",
          text: "Has eliminada la tarjeta",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <header>
        <nav className="navbar bg-black">
          <div className="container-fluid">
            <a className="navbar-brand text-white">🐶Veterinaria🐈</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success disabled"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </header>
      <main className="container my-4">
        <h2 className="text-center my-2">
          Administador pacientes de veterinaria
        </h2>
        <section className="cotenedorFormulario rounded-4 d-flex justify-content-center">
          <FormularioCitas agregarCita={agregarCita}></FormularioCitas>
        </section>
        <h4 className="text-white text-center my-2">
          {citas.length === 0 ? "No hay citas aún 😔" : "Administre sus citas aqui🫡"}
        </h4>
        <div className="container my-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {citas.map((cita) => (
            <CardCitas
              key={cita.id}
              cita={cita}
              borrarCard={() => borrarCard(cita.id)}
            />
          ))}
        </div>
      </main>
      <footer className="bg-black text-center text-white">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">
          Desarrollado por{" "}
          <a href="https://github.com/Lucaspozziok64">Lucas Figueroa</a>👨‍💻
        </p>
      </footer>
    </>
  );
}

export default App;
