import mongoose from "mongoose"; // Importamos la libreria mongoose
import 'dotenv/config' // Importamos libreria Dotenv para variables de entorno 

export default mongoose.connect(`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@clasenodeactualizada.ltuda.mongodb.net/${process.env.BD}`)
.then(()=>console.log('Conexion de Mongo Exitoso'))
.catch((error)=>console.log(`No Se Pudo Conectar A Mongo ${error}`))