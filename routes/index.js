const routerx = require('express-promise-router');
const articuloRouter = require('./api/articulo.js');
const categoriaRouter = require('./api/categoria.js');

const router = routerx();
router.use('/categoria',categoriaRouter);

module.exports = router;