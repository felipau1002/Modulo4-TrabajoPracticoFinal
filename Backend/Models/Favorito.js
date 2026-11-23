import mongoose from "mongoose";


const favoritoSchema = new mongoose.Schema(
  {
    perfil: {type: mongoose.Schema.Types.ObjectId, ref: "Perfil", required: true},
    juego: {type: mongoose.Schema.Types.ObjectId, ref: "Videojuego", required: true}
  }
)

const Favorito = mongoose.model('Favorito', favoritoSchema)


export default Favorito