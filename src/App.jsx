import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header from "./components/header"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </div>
  )
}

export default App
