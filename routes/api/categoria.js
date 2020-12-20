/* un Ejemplo  de como se veria la ruta listar - categoria*/
const routerx = require('express-promise-router');
const CategoriaController = require('../../controllers/CategoriaController.js');
const auth = require('../../middlewares/auth.js');

const router = routerx();

router.get('/list', auth.verifyUsuario, CategoriaController.list);
router.post('/add', auth.verifyUsuario, CategoriaController.add);
router.put('/update', auth.verifyUsuario, CategoriaController.update);
router.put('/activate', auth.verifyUsuario, CategoriaController.activate);
router.put('/deactivate', auth.verifyUsuario, CategoriaController.deactivate);

module.exports = router;