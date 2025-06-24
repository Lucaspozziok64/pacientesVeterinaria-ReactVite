import './App.css'
import CardCitas from './components/CardCitas'
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
        <div className="container my-2 row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <CardCitas></CardCitas>
        </div>
      </main>
    </>
  )
}

export default App
