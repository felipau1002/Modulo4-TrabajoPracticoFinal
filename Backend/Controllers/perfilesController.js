import { obtenerPerfiles, agregarPerfil, editarPerfil, eliminarPerfil } from "../Services/perfilesService.js";



export async function obtenerPerfilesController(req, res) {
  try {
    const perfiles = await obtenerPerfiles()

    res.status(200).json(perfiles)
  } catch (error) {
    res.status(500).send({ mensaje: 'error al obtener perfiles', error: error.message })
  }
}


export async function crearPerfilController(req, res) {
  try {
    const nuevoPerfil = await agregarPerfil({
      usuario: req.usuario.id,
      nombre: req.body.nombre,
      avatar: req.body.avatar
  })

    res.status(200).json(nuevoPerfil)
  } catch (error) {
    res.status(500).send({ mensaje: 'error al crear perfil', error: error.message })
  }
}


export async function editarPerfilController(req, res) {
  try {
    const { id } = req.params
    const nuevosDatos = req.body
    const perfilEditado = await editarPerfil(id, nuevosDatos)

    res.status(200).json(perfilEditado)
  } catch (error) {
    res.status(500).send({ mensaje: 'error al editar perfil', error: error.message })
  }
}


export async function elimiinarPerfilController(req, res) {
  try {
    const { id } = req.params
    const perfilEliminado = await eliminarPerfil(id)

    res.status(200).json(perfilEliminado)
  } catch (error) {
    res.status(500).send({ mensaje: 'error al eliminar perfil', error: error.message })
  }
}