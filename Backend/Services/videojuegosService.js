import Videojuego from "../Models/Videojuego.js"




export async function obtenerVideojuegos() {
  return await Videojuego.find()
}



export async function obtenerVideojuegoPorID(id) {
  return await Videojuego.findById(id)
}



export async function agregarVideojuego(juego) {
  const juegoNuevo = new Videojuego(juego)
  return await juegoNuevo.save()
}



export async function editarVideojuego(id, juegoEditado) {
  return await Videojuego.findByIdAndUpdate(id, juegoEditado)
}



export async function eliminarVideojuego(id) {
  return await Videojuego.findByIdAndDelete(id)
}