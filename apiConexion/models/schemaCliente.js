import mongoose from 'mongoose'

async function conectarBD() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/local');
        console.log('Se conecto a MongoDB');
    }
    catch (error){
        console.error('Error al conectar a MongoDB', error)
    }
}
conectarBD()


const clientesSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    password: String
})
const Registro = mongoose.model('clientes', clientesSchema)

export default Registro


