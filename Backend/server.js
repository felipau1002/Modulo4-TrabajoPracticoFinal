import 'dotenv/config'
import express from 'express'
import { connectDB } from './Config/db-config.js'
import videojuegosRoutes from './Routes/videojuegosRoutes.js'


const app = express()

app.use(express.json())


connectDB()


// test juegos routes
app.use('/', videojuegosRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando en el puerto ${process.env.PORT}`)
})