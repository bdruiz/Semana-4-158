const routerx = require('express-promise-router');
const articuloRouter = require('./api/articulo.js');
const categoriaRouter = require('./api/categoria.js');
const usuarioRouter = require('./api/usuario.js');

const router = routerx();
router.use('/categoria', categoriaRouter);
router.use('/usuario', usuarioRouter);
router.use('/articulo', articuloRouter);

module.exports = router;