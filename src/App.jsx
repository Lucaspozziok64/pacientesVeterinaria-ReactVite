import './App.css'
import FormularioCitas from './components/FormularioCitas'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <main className='container my-4'>
        <h2 className='text-center my-2'>Administador pacientes de veterinaria</h2>
        <section className='cotenedorFormulario rounded-4 d-flex justify-content-center'>
          <FormularioCitas></FormularioCitas>
        </section>
      </main>
    </>
  )
}

export default App
