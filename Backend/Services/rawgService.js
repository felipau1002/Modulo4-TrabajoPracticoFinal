import 'dotenv/config'
import { connectDB } from '../Config/db-config.js'
import Videojuego from "../Models/Videojuego.js"
import axios from 'axios'


const API_KEY = process.env.RAWG_API_KEY



async function obtenerJuegos() {

  let juegosGuardados = 0

  for (let pagina =1; pagina <= 10; pagina++) {

    const respuesta = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${pagina}&page_size=50`)
    const juegos = respuesta.data.results

    for (const juego of juegos) {

      const juegoDetalle = await axios.get(`https://api.rawg.io/api/games/${juego.id}?key=${API_KEY}`)
      const detalle = juegoDetalle.data

      const juegoNuevo = {
        rawgId: detalle.id,
        nombre: detalle.name,
        descripcion: detalle.description_raw,
        genero: detalle.genres.map(genre => genre.name).join(", "),
        plataforma: detalle.platforms.map(p => p.platform.name).join(", "),
        fechaLanzamiento: detalle.released,
        ratingEdad: detalle.esrb_rating?.name,
        imagen: detalle.background_image,
      }

      await Videojuego.create(juegoNuevo)

      juegosGuardados++

      console.log(`juegos añadidios ${juegosGuardados}`)
    }
  }

  return juegosGuardados
  
}

connectDB()
obtenerJuegos()