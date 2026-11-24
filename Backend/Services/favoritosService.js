import Favorito from '../../Models/Perfil.js'



export async function obtenerFavoritos() {
  return await Favorito.find()
}


export async function agregarFavorito(id) {
  const nuevoFavorito = new Favorito(id)
  return await nuevoFavorito.save()
}


export async function eliminarFavorito(id) {
  return Favorito.findByIdAndDelete(id)
}