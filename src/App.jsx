import { useEffect, useState } from 'react'
import './App.css'
import CardCitas from './components/CardCitas'
import FormularioCitas from './components/FormularioCitas'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const citasGuardadas = JSON.parse(localStorage.getItem('agendaCitas')) || [];
  const [citas, setCitas] = useState(citasGuardadas)

  const agregarCita = (nuevoNombre, nuevoDueño, nuevoHora, nuevoFecha, nuevoSintoma) => {
    const nuevaCita = {id: Date.now(), nombre: nuevoNombre, dueño: nuevoDueño, fecha: nuevoFecha, hora: nuevoHora, sintoma: nuevoSintoma}
    setCitas([...citas, nuevaCita])
  }

  useEffect(()=> {
    localStorage.setItem('agendaCitas', JSON.stringify(citas));
  }, [citas])

  const borrarCard = (id) => {
    setCitas(citas.filter((cita)=> cita.id !== id));
  }

  return (
    <>
      <main className='container my-4'>
        <h2 className='text-center my-2'>Administador pacientes de veterinaria</h2>
        <section className='cotenedorFormulario rounded-4 d-flex justify-content-center'>
          <FormularioCitas agregarCita={agregarCita}></FormularioCitas>
        </section>
        <div className="container my-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {citas.map((cita)=> (
            <CardCitas 
              key={cita.id}
              cita={cita}
              borrarCard={()=> borrarCard(cita.id)}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
