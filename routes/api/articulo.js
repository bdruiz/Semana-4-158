/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
//const articuloController = require('../../controllers/ArticuloController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();


//router.get('/list', articuloController.list);


module.exports = router;