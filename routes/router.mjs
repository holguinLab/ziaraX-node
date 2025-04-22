import express from 'express'
import controller_home from '../src/controller/controller_home.mjs'


export const router = express.Router()

//Ruta que viene desde el controlador 
router.get('/',controller_home.home)

