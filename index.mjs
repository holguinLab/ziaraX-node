import express from 'express'
import path from 'path' // Libreria para EJS generar Rutas renderizadas 
import './src/config/conexion.mjs' // Se importa la conexion de mongo sin necesidad de usar una variable 
import { router } from './routes/router.mjs' // Importacion del archivo router.js


const app = express()
const PORT = process.env.PORT


// Requerido para usar plantillas  EJS 
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));


app.use('/v1',router)

app.listen(PORT,()=>{
    console.log(`Aplicacion corriendo en el puerto ${PORT}`)
})