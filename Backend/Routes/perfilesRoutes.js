import express from 'express'
import { obtenerPerfilesController, obtenerPerfilPorIdController, crearPerfilController, editarPerfilController, elimiinarPerfilController } from "../Controllers/perfilesController.js";
import { validacionNombre, validacionAvatar } from '../Validations/perfilesValidations.js';
import { middlewareDeErrores } from '../Middlewares/middlewareErrores.js';
import { autenticarToken } from '../Middlewares/middlewareAutenticacion.js';


const router = express.Router()


router.get('/profiles', autenticarToken, obtenerPerfilesController)

router.get('/profiles/:id', autenticarToken, obtenerPerfilPorIdController)

router.post(
  '/profiles',
  validacionNombre,
  validacionAvatar,
  middlewareDeErrores,
  autenticarToken,
  crearPerfilController
) 

router.put(
  '/profiles/:id',
  validacionNombre,
  validacionAvatar,
  middlewareDeErrores,
  autenticarToken,
  editarPerfilController
) 

router.delete(
  '/profiles/:id',
  autenticarToken,
  elimiinarPerfilController
)


export default router