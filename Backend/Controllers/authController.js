import authService from "../Services/authService.js";



export async function registrarController(req, res) {
  try {
    const resultado = await authService.registrar(req.body)

    res.status(200).json(resultado)
  } catch (error) {
    res.status(400).send({ mensaje: "Error al registrar usuario", error: error.message })
  }
}


export async function iniciarSesionController(req, res) {
  try {
    const { email, contraseña } = req.body
    const resultado = await authService.iniciarSesion(email, contraseña)

    res.status(200).json(resultado)
  } catch (error) {
    res.status(400).send({ mensaje: "Error al iniciar sesion", error: error.message })
  }
}


export async function seleccionarPerfilController(req, res) {
  try {
    const resultado = await authService.seleccionarPerfil(
      req.usuario.id,
      req.params.perfilId
    )

    return res.status(200).json(resultado)
  } catch (error) {
    res.status(400).send({ mensaje: "Error al seleccionar perfil", error: error.message })
  }
}