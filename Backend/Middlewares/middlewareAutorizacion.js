

export const autorizarRol = (rolPermitido) => {
  return (req, res, next) => {
    if(!req.perfil) {
      return res.status(401).json({ mensaje: "No hay un perfil autenticado" })
    }

    if(!rolPermitido.includes(req.perfil.rol)) {
      return res.status(403).json({ mensaje: "No tenes permisos para realizar esta accion" })
    }

    next()
  }
}