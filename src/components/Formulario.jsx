const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
        <form action="" className="bg-white shadow-md rounded-md py-10 px-5 mb-10">
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">Nombre Mascota</label>
            <input type="text" id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la mascota" />
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">Nombre Propietario</label>
            <input type="text" id="propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del propietario" />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-grey-700 uppercase font-bold">Email</label>
            <input type="email" id="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email contacto propietario" />
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">Alta</label>
            <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" />
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">Sintomas</label>
            <textarea name="sintomas" id="sintomas" cols="30" rows="10" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los sintomas"></textarea>
          </div>
          <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors" value='Agregar paciente'/>
        </form>
    </div>
  )
}

export default Formulario