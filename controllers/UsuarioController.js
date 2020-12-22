const db = require('../models');
const tokenSer = require('../services/token')
var bcrypt = require('bcryptjs');


exports.signin = async (req, res) => {
    try {
        const user = await db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const tokenReturn = await tokenSer.encode(user.id, user.rol);
                res.status(200).json({
                    user, tokenReturn
                })


            } else {

                res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password" });
            }
        } else {
            res.status(404).send('User Nor Found.');
        }

    } catch (err) {
        res.status(500).send('Error -> ' + err);
    }
}

exports.add = async (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await db.Usuario.create(req.body);
    res.status(200).json(newUser);
};

exports.list = async (req, res, next) => {
    const registro = await db.Usuario.findAll();
    res.status(200).json(registro);
};


exports.update = async (req, res, next) => {
    try {
        const reg = await db.Usuario.update({
            nombre: req.body.nombre, 
            password: bcrypt.hashSync(req.body.password, 10),
            rol: req.body.rol,
            email: req.body.email

        }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.activate = async (req, res, next) => {
    try {
        console.log(req.body._id);
        const reg = await db.Usuario.update({ estado: 1 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.deactivate = async (req, res, next) => {
    try {
        const reg = await db.Usuario.update({ estado: 0 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}