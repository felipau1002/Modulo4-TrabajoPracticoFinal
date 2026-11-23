import mongoose from "mongoose";


const perfilSchema = new mongoose.Schema(
  {
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true},
    nombre: {type: String, required: true},
    avatar: {type: String, required: true},
    rol: {type: String, default: "usuario"}
  },
  {
    timestamps: true,
    collection: "Perfiles"
  }
)

const Perfil = mongoose.model('Perfil', perfilSchema)


export default Perfil