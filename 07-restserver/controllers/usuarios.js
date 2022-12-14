const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req, res = response) => {
    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q, nombre, apikey
    });
}

const usuariosPut = (req, res = response) => {
    const {id}  = req.params;
    const {password, google,...resto}  = req.body;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPost = async (req, res = response) => {
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo existe
    //Se mueve a db-validators.js
    // const existeEmail = await Usuario.findOne({correo});
    // if(existeEmail){
    //     return res.status(400).json({
    //         msg: 'Ese correo ya está registrado.'
    //     });
    // }

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(usuario.password, salt)

    //Guardar en BD
    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}