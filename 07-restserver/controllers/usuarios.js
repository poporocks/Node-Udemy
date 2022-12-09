const {response, request} = require('express');
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
    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPost = async (req, res = response) => {
    //const body = req.body;
    const usuario = new Usuario(req.body);
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