import { body } from 'express-validator'



export const validacionNombre = [
  body('nombre')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({min: 3, max: 25}).withMessage('El nombre debe tener entre 3 y 25 caracteres')
]



export const validacionAvatar = [
  body('avatar')
    .optional({ checkFalsy: true })
    .isURL().withMessage('Debe ser una URL')
    .matches(/\.(jpg|jpeg|png|webp|gif)$/i).withMessage('Debe ser una URL valida')
]