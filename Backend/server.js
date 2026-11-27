import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './Config/db-config.js'
import videojuegosRoutes from './Routes/videojuegosRoutes.js'
import perfilesRoutes from './Routes/perfilesRoutes.js'
import favoritosRoutes from './Routes/favoritosRoutes.js'
import authRoutes from './Routes/authRoutes.js'



const app = express()


app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use(express.json())


connectDB()


app.use('/', videojuegosRoutes, perfilesRoutes, favoritosRoutes, authRoutes)



app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando en el puerto ${process.env.PORT}`)
})