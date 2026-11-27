import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Usuario from "../Models/Usuario.js"
import Perfil from '../Models/Perfil.js'


class authService {

  // Funcion generacion de token
  generarToken(usuario, perfil) {
    return jwt.sign(
      {
        id: usuario._id,
        perfilId: perfil?._id
      },

      process.env.JWT_SECRET,

      { expiresIn: '24h' }
    )
  }

  // Funcion seleccionar perfil 
  async seleccionarPerfil(usuarioId, perfilId) {
    const perfil = await Perfil.findOne({
      _id: perfilId,
      usuario: usuarioId
    })

    if(!perfil) {
      throw new Error("Perfil no encontrado o no pertenece a este usuario")
    }

    const usuario = await Usuario.findById(usuarioId)
    const token = this.generarToken(usuario, perfil)

    return { perfil, token }
  }

  // Funcion registrar usuario
  async registrar(datos) {
    
    const usuarioExistente = await Usuario.findOne({ email: datos.email })

    if(usuarioExistente) {
      throw new Error('Este correo ya esta registrado')
    }


    const contraseñaHasheada = await bcrypt.hash(datos.contraseña, 10)



    const usuario = new Usuario({
      ...datos,
      contraseña: contraseñaHasheada
    })

    await usuario.save()

    const respuestaUsuario = usuario.toObject()

    delete respuestaUsuario.contraseña


    const token = this.generarToken(usuario)

    return { usuario: respuestaUsuario, token }
  }


  // Funcion iniciar sesion
  async iniciarSesion(email, contraseña) {
    const usuario = await Usuario.findOne({ email })

    if(!usuario) {
      throw new Error('Usuario no encontrado')
    }


    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña)

    if(!contraseñaValida) {
      throw new Error('Correo o contraseña incorrectos')
    }


    const respuestaUsuario = usuario.toObject()
    delete respuestaUsuario.contraseña


    const token = this.generarToken(usuario)
    return { usuario: respuestaUsuario, token }
  }

}


export default new authService()