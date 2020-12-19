const db = require('../models');
const bcrypt = require('bcryptjs');

exports.list = async (req, res, next) => {
    const registro = await db.Categoria.findAll();
    res.status(200).json(registro);
};

exports.add = async (req, res, next) => {
    try {
        const reg = await db.Categoria.create(req.body);
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {
        const reg = await db.Categoria.update({
            nombre: req.body.nombre, descripcion:
                req.body.descripcion
        }, { where: { id: req.body._id } });
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
        const reg = await db.Categoria.update({ estado: 1 }, { where: { id: req.body._id } });
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
        const reg = await db.Categoria.update({ estado: 0 }, { where: { id: req.body._id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}