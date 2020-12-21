/* un Ejemplo  de como se veria la ruta listar - categoria*/
const routerx = require('express-promise-router');
const UsuarioController = require('../../controllers/UsuarioController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.post('/login', UsuarioController.signin);
router.post('/add', auth.verifyUsuario, UsuarioController.add);
router.get('/list', auth.verifyUsuario, UsuarioController.list);
router.put('/update',auth.verifyUsuario, UsuarioController.update);
router.put('/activate', auth.verifyUsuario, UsuarioController.activate);
router.put('/deactivate', auth.verifyUsuario, UsuarioController.deactivate);


module.exports = router;