import jwt from 'jsonwebtoken'
import { obtenerPerfilAutenticado } from '../Services/perfilesService.js'
import Perfil from '../Models/Perfil.js'


export const autenticarToken = async (req, res, next) => {
  const autorizacion = req.headers['authorization']

  const token = autorizacion && autorizacion.split(' ')[1]


  try {
      if(!token) {
      return res.status(401).json({ mensaje: 'Token no proporcionado' })
    }


    const tokenDecodificado = jwt.verify(token, process.env.JWT_SECRET)
    req.usuario = tokenDecodificado


    if(tokenDecodificado.perfilId) {
      const perfil = await obtenerPerfilAutenticado(tokenDecodificado.perfilId, tokenDecodificado.id)

      if(!perfil) {
        return res.status(401).json({ mensaje: "Perfil no valido" })
      }

      req.perfil = perfil
    }


    next()
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token invalido' })
  }
}



export const autenticarPerfil = async (req, res, next) => {
  try {
    const { perfilId, id: usuarioId } = req.usuario

    if(!perfilId) {
      return res.status(400).json({ mensaje: "No hay un perfil seleccionado" })
    }

    const perfil = await Perfil.findOne({
      _id: perfilId,
      usuario: usuarioId
    })

    if(!perfil) {
      return res.status(401).json({ mensaje: "Perfil no valido" })
    }

    req.perfil = perfil

    next()
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al autenticar el perfil" })
  }
}