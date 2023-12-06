import { Router } from "express";
import  Registro from '../models/schemaCliente.js';
import Paciente from '../models/schemaProducto.js'
import session from 'express-session'
import Producto from "../models/schemaProducto.js";

const router = Router()



router.post('/registrar', async (req, res) =>{
    try{
        const {nombre, correo, password} = req.body
    
        const registroUsuarios = new Registro({
            nombre,
            correo,
            password
        })
        await registroUsuarios.save()
        res.status(200).json({ message: 'cliente registrado correctamente' });
    }
    catch(error){
        res.status(500).json({error : 'Error al agregar un nuevo usuario'})
    }
})




router.post('/iniciar', async (req, res) =>{
    try{
        const {correo, password} = req.body;

        const cliente = await Registro.findOne({correo})
        
        if(password == cliente.password){
            let isLogin = true;
            res.json({verificar: isLogin})
        }
        else{
            res.json({ error: 'Correo o contraseña incorrectos' })
        }
    }
    catch(error){
        res.status(500).json({ error: 'Error al iniciar sesión'});
    }
})


router.post('/insert', async (req, res) =>{
    try{
        const {nombre, valor, stock, identificador} = req.body;

        const insertarProducto = new Producto ({
            nombre,
            valor,
            stock,
            identificador
        })
        await insertarProducto.save()
        res.status(200).json({ message: 'Producto registrado correctamente' });
    }   
    catch(error){
        res.status(500).json({error : 'Error al agregar un nuevo usuario'})
    }
})


router.get('/home', async (req, res) =>{
    let Productos = await Producto.find()
    res.json({pte: Productos})
})


router.delete('/eliminar', async (req, res) =>{
    try{
        const {id} = req.body;
        const eliminar = await Producto.findByIdAndDelete(id)

        if(!eliminar){
            res.status(404).json({error: 'Producto no encontrado'})
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
        
    }
    catch(error){
        res.status(500).json({error: 'Error al eliminar producto'})

    }
})


router.put('/actualizar', async (req, res) =>{
    try{
        const {id, nombre, valor, stock, identificador} = req.body;

        const actualizar = await Paciente.findByIdAndUpdate(
            id,
            {
                nombre,
                valor,
                stock,
                identificador
            },
            {new: true}
        );
        if(!actualizar) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

    }
    catch(error){
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
})


export default router;