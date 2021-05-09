const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generateJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: 'false',
                msg: 'One user already exists with this email'
            })
        }

        usuario = new Usuario(req.body);

        // encrypt the password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        const token = await generateJWT(usuario.id, usuario.name);


        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Please talk with the admin'
        })
    }
}

const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
        res.status(400).json({
            ok: false,
            msg: 'The user doesnt exists'
        });
    }

    const validarPassword = bcrypt.compareSync(password, usuario.password);

    if (!validarPassword) {
        res.status(400).json({
            ok: false,
            msg: 'Incorrect Password '
        })
    }

    // Generar our JWT

    const token = await generateJWT(usuario.id, usuario.name);

    res.status(200).json({
        ok: true,
        uid: usuario.id,
        name: usuario.name,
        token
    })
}

const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;


    // generate a new jwt and return in this request
    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        token,
        uid, name
    })
}



module.exports = {
    crearUsuario,
    login: loginUsuario,
    revalidarToken
}



