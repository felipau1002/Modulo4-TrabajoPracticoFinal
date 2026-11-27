import express from 'express'
import { registrarController, iniciarSesionController, seleccionarPerfilController } from '../Controllers/authController.js'
import { validacionNombre, validacionEmail, validacionContraseña } from '../Validations/usuarioValidations.js'
import { middlewareDeErrores } from '../Middlewares/middlewareErrores.js'
import { autenticarToken } from '../Middlewares/middlewareAutenticacion.js'


const router = express.Router()


router.post(
  '/register',
  validacionNombre,
  validacionEmail,
  validacionContraseña,
  middlewareDeErrores,
  registrarController
)


router.post('/login', iniciarSesionController)


router.post('/select/:perfilId', autenticarToken, seleccionarPerfilController)




export default router