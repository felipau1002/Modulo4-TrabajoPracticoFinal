import { body } from 'express-validator'


export const validacionNombre = [
  body('nombre')
    .trim()
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({min: 3, max: 90}).withMessage('El nombre debe tener entre 3 y 90 caracteres')
]


export const validacionDescripcion = [
  body('descripcion')
    .trim()
    .notEmpty().withMessage('La descripcion es obligatoria')
    .isLength({min: 20, max: 500}).withMessage('El nombre debe tener entre 20 y 500 caracteres')
]


export const validacionGeneros = [
  body('genero')
    .isArray({min: 1}).withMessage('Debe tener al menos un genero'),

  body('genero.*')
    .trim()
    .toUpperCase()
]


export const validacionPlataformas = [
  body('plataforma')
    .isArray({min: 1}).withMessage('Debe tener al menos una plataforma')
]


export const validacionFechaLanzamiento = [
  body('fechaLanzamiento')
    .isISO8601().withMessage('Debe ser una fecha valida')
]


export const validacionRatingEdad = [
  body('ratingEdad')
    .isInt({min: 0, max: 18}).withMessage('Debe ser un rating de edad entre 0 y 18')
]


export const validacionImagen = [
  body('imagen')
    .isURL().withMessage('Debe ser una URL')
    .matches(/\.(jpg|jpeg|png|webp|gif)$/i).withMessage('Debe ser una URL valida')
]