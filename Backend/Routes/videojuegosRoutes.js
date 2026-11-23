import express from 'express'
import { agregarJuegoController, editarJuegoController, eliminarJuegoController, obtenerJuegoPorIDController, obtenerJuegosController } from '../Controllers/videojuegosController.js'
import { validacionNombre, validacionDescripcion, validacionGeneros, validacionPlataformas, validacionFechaLanzamiento, validacionRatingEdad, validacionImagen } from '../Validations/videojuegosValidations.js'
import { middlewareDeErrores } from '../Middlewares/middlewareErrores.js'
// import middlewares


const router = express.Router()


router.get('/games', obtenerJuegosController)
router.get('/games/:id', obtenerJuegoPorIDController)

router.post(
  '/games',     // AGREGAR AQUI MIDDLEWARES
  validacionNombre,
  validacionDescripcion,
  validacionGeneros,
  validacionPlataformas,
  validacionFechaLanzamiento,
  validacionRatingEdad,
  validacionImagen,
  middlewareDeErrores,
  agregarJuegoController
) 

router.put(
  '/games/:id',  // AGREGAR AQUI MIDDLEWARES
  validacionNombre,
  validacionDescripcion,
  validacionGeneros,
  validacionPlataformas,
  validacionFechaLanzamiento,
  validacionRatingEdad,
  validacionImagen,
  middlewareDeErrores,
  editarJuegoController
)

router.delete('/games/:id', eliminarJuegoController) // AGREGAR AQUI MIDDLEWARES



export default router