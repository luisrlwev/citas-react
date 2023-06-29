function App() {

  // Puedes crear funciones e ifs antes del return
  const sumar = () => {
    const numero = 5;

    if(numero > 5){
      console.log("Si es mayor a 5")
    }else{
      console.log("No es mayor a 5")
    }
  }

  sumar();

  const edad = 18

  return (
    <>
      {edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'}
      <div>
        <h1>{'Hola Mundo'.toUpperCase()}</h1>
        <h2>Edad del usuario: {edad}</h2>
        <img src="alguna imagen.jp" alt="Foto"/>
        <input type="text" />
        <p>Un parrafo</p>
      </div>
      <div>
        <h1>Hola Mundo</h1>
        <img src="alguna imagen.jp" alt="Foto"/>
        <input type="text" />
        <p>Un parrafo</p>
      </div>
    </>
  )
}

export default App
