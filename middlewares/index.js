
const validaCampos = require('../middlewares/validar-usuario.middleware');
const validarJWT = require('../middlewares/validar-jwt.middleware');
const validaRoles = require('../middlewares/validar-role.middleware');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
}