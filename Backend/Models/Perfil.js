import mongoose from "mongoose";


const perfilSchema = new mongoose.Schema(
  {
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true},
    nombre: {type: String, required: true},
    avatar: {type: String, default: "https://images.openai.com/static-rsc-4/yLRfNT5TFxeILcBTWcILHESJU6msegRbA3hf8g-xeVgx6TXhJjfZhTBguqO4vqfav9lJH_XYwsIxHeHmn3A02eYg70WUnETZ44daK6Cl25-tbXEjSIddBhVSYbgNAYDuv7_4gcAPd5zgTBQ0ZboO7JQWoTaTnJas0-FtYWuIIcNy6WjRCdF4HmiWIFeSN7qo?purpose=fullsize"},
    rol: {type: String, default: "usuario"}
  },
  {
    timestamps: true,
    collection: "Perfiles"
  }
)

const Perfil = mongoose.model('Perfil', perfilSchema)


export default Perfil