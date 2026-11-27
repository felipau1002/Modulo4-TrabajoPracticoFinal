import { body } from 'express-validator'



export const validacionNombre = [
  body('nombre')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({min: 3, max: 25}).withMessage('El nombre debe tener entre 3 y 25 caracteres')
]


export const validacionEmail = [
  body('email')
    .trim()
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Email no valido')
]


export const validacionContraseña = [
  body('contraseña')
    .trim()
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({min: 5}).withMessage('La contraseña debe tener al menos 5 caracteres')
]