import express from 'express'
import { obtenerPerfilesController, crearPerfilController, editarPerfilController, elimiinarPerfilController } from "../Controllers/perfilesController.js";


const router = express.Router()


router.get('/profiles', autenticarToken, obtenerPerfilesController)

router.post(
  '/profiles',
  crearPerfilController
) // AGREGAR AQUI VALIDACIONES

router.put(
  '/profiles/:id',
  editarPerfilController
) // AGREGAR AQUI VALIDACIONES

router.delete(
  '/profiles/:id',
  elimiinarPerfilController
  )


export default router