import Perfil from '../Models/Perfil.js'



export async function obtenerPerfilesPorUsuario(usuarioId) {
  return await Perfil.find({usuario: usuarioId})
}


export async function obtenerPerfilPorId(perfilId, usuarioId) {
  return await Perfil.findOne({_id: perfilId, usuario: usuarioId})
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



export async function obtenerPerfilAutenticado(perfilId, usuarioId) {
  return await Perfil.findOne({
    _id: perfilId,
    usuario: usuarioId
  })
}