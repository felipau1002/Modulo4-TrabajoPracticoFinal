import { obtenerVideojuegos, obtenerVideojuegoPorID, agregarVideojuego, editarVideojuego, eliminarVideojuego } from "../Services/videojuegosService.js";


export async function obtenerJuegosController(req, res) {
  try {
    const juegos = await obtenerVideojuegos()

    res.status(200).json(juegos) //cambiar por res.redirect => res.redirect('/algo');
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener videojuegos", error: error.message })
  }
}


export async function obtenerJuegoPorIDController(req, res) {
  try {
    const { id } = req.params
    const juego = await obtenerVideojuegoPorID(id)
    if(!juego){
      return res.status(404).json({ mensaje: "videojuego no encontrado" })
    }

    res.status(200).json(juego) //cambiar por res.redirect => res.redirect('/algo');
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener videojuego", error: error.message })
  }
}


export async function agregarJuegoController(req, res) {
  try {
    const juegoNuevo = await agregarVideojuego(req.body)

    res.status(200).json(juegoNuevo) //cambiar por res.redirect => res.redirect('/algo');
  } catch (error) {
    res.status(500).send({ mensaje: "Error al agregar videojuego", error: error.message })
  }
}


export async function editarJuegoController(req, res) {
  try {
    const { id } = req.params
    const nuevosDatos = req.body
    const juegoEditado = await editarVideojuego(id, nuevosDatos)

    res.status(200).json(juegoEditado) //cambiar por res.redirect => res.redirect('/algo');
  } catch (error) {
    res.status(500).send({ mensaje: "Error al agregar videojuego", error: error.message })
  }
}


export async function eliminarJuegoController(req, res) {
  try {
    const { id } = req.params
    const juegoEliminado = await eliminarVideojuego(id)

    res.status(200).json(juegoEliminado) //cambiar por res.redirect => res.redirect('/algo');
  } catch (error) {
    res.status(500).send({ mensaje: "Error al agregar videojuego", error: error.message })
  }
}