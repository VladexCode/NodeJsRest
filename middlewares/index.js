
const validaCampos = require('../Middlewares/validar-usuario.middleware');
const validarJWT = require('../Middlewares/validar-jwt.middleware');
const validaRoles = require('../Middlewares/validar-role.middleware');
const validarArchivoSubir =require('../Middlewares/validar-archivo.middleware');

module.exports = {
    ...validaCampos,
    ...validarJWT,
    ...validaRoles,
    ...validarArchivoSubir
}