const { Router } = require('express');
const { crearUsuario, login, revalidarToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../controllers/validar-token-');

const router = Router();

router.get('/', (req, res) => {
    res.json('xd');
});

router.post('/new',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('password', 'The password should atleast be six caracterers').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);


router.post('/', [
    check('email', 'The email is required').isEmail(),
    check('password', 'The password should atleast be six caracterers').isLength({ min: 6 }),
    validarCampos
], login);

router.get('/renew', validarJWT, revalidarToken);


module.exports = router;