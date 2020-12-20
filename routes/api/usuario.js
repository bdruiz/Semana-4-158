/* un Ejemplo  de como se veria la ruta listar - categoria*/
const routerx = require('express-promise-router');
const UsuarioController = require('../../controllers/UsuarioController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login', UsuarioController.signin);
router.post('/add', UsuarioController.add);
router.get('/list', UsuarioController.list);


module.exports = router;