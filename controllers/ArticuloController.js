const db = require('../models');


exports.list = async (req, res, next) => {
    try {
        const registro = await db.Articulo.findAll({
            include: [
                {
                    model: db.Categoria,
                    as: 'categoria',
                    required: true,
                    attributes: ["nombre"]
                }
            ]

        });
        if (registro) {
            res.status(200).json(registro);
        }
        else {
            res.status(404).send({
                message: 'No Hay categorias en el sistema'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });

    }
};

exports.add = async (req, res, next) => {
    try {
        const reg = await db.Articulo.create(req.body);
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
        const reg = await db.Articulo.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            categoriaId: req.body.categoriaId,
            imagenurl: req.body.imagenurl

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
        const reg = await db.Articulo.update({ estado: 1 }, { where: { id: req.body.id } });
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
        const reg = await db.Articulo.update({ estado: 0 }, { where: { id: req.body.id } });
        res.status(200).json(reg);
    } catch (e) {
        res.status(500).send({
            message: 'Ocurrió un error'
        });
        next(e);
    }
}