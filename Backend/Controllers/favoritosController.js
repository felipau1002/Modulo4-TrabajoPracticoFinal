import { obtenerFavoritos, agregarFavorito, eliminarFavorito } from "../Services/favoritosService.js";



export async function obtenerFavoritosController(req, res) {
  try {
    const Favoritos = await obtenerFavoritos()

    res.status(200).json(Favoritos)
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener favoritos", error: error.message })
  }
}



export async function agregarFavoritoController(req, res) {
  try {
    const { id } = req.params
    const nuevoFavorito = await agregarFavorito(id)

    res.status(200).json(nuevoFavorito)
  } catch (error) {
    res.status(500).send({ mensaje: "Error al agregar juego a favoritos", error: error.message })
  }
}



export async function elimiarFavoritoController(req, res) {
  try {
    const { id } = req.params
    const favoritoEliminado = await eliminarFavorito(id)

    res.status(200).json(favoritoEliminado)
  } catch (error) {
    res.status(500).send({ mensaje: "Error al eliminar juego de favoritos", error: error.message })
  }
}