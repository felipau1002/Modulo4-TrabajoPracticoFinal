import Perfil from '../../Models/Perfil.js'



export async function obtenerPerfiles() {
  return await Perfil.find()
}


export async function agregarPerfil(datos) {
  const perfilNuevo = new Perfil(datos)
  return await perfilNuevo.save()
}



export async function editarPerfil(id, nuevosDatos) {
  return await Perfil.findByIdAndUpdate(id, nuevosDatos)
}



export async function eliminarPerfil(id) {
  return await Perfil.findByIdAndDelete(id)
}