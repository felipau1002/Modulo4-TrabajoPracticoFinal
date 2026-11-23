import mongoose from "mongoose";


const videojuegoSchema = new mongoose.Schema(
  {
    rawgId: {type: Number, unique: true, sparse: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    genero: [{type: String, required: true}],
    plataforma: [{type: String, required: true}],
    fechaLanzamiento: {type: Date, required: true},
    ratingEdad: {type: String, required: true, default: "Sin Clasificacion"},
    imagen: {type: String, required: true},
  },
  {
    timestamps: true,
    collection: "Videojuegos"
  }
)

const Videojuego = mongoose.model('Videojuego', videojuegoSchema)


export default Videojuego