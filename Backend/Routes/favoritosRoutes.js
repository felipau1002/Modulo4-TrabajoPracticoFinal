import express from 'express'
import { obtenerFavoritosController, agregarFavoritoController, elimiarFavoritoController } from '../Controllers/favoritosController.js'



const router = express.Router()



router.get('/favorites', obtenerFavoritosController)
router.post('/favorites', agregarFavoritoController)
router.delete('/favorites', elimiarFavoritoController)



export default router