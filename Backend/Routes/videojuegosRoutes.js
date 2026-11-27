import express from 'express'
import { agregarJuegoController, editarJuegoController, eliminarJuegoController, obtenerJuegoPorIDController, obtenerJuegosController } from '../Controllers/videojuegosController.js'
import { validacionNombre, validacionDescripcion, validacionGeneros, validacionPlataformas, validacionFechaLanzamiento, validacionRatingEdad, validacionImagen } from '../Validations/videojuegosValidations.js'
import { middlewareDeErrores } from '../Middlewares/middlewareErrores.js'
import { autenticarToken, autenticarPerfil } from '../Middlewares/middlewareAutenticacion.js'
import { autorizarRol } from '../Middlewares/middlewareAutorizacion.js'


const router = express.Router()


router.get('/games', autenticarToken, obtenerJuegosController)
router.get('/games/:id', autenticarToken, obtenerJuegoPorIDController)

router.post(
  '/games',
  validacionNombre,
  validacionDescripcion,
  validacionGeneros,
  validacionPlataformas,
  validacionFechaLanzamiento,
  validacionRatingEdad,
  validacionImagen,
  middlewareDeErrores,
  autenticarToken,
  autenticarPerfil,
  autorizarRol(["admin"]),
  agregarJuegoController
) 

router.put(
  '/games/:id',
  validacionNombre,
  validacionDescripcion,
  validacionGeneros,
  validacionPlataformas,
  validacionFechaLanzamiento,
  validacionRatingEdad,
  validacionImagen,
  middlewareDeErrores,
  autenticarToken,
  autenticarPerfil,
  autorizarRol(["admin"]),
  editarJuegoController
)

router.delete('/games/:id',
  autenticarToken,
  autenticarPerfil,
  autorizarRol(["admin"]),
  eliminarJuegoController
)



export default router