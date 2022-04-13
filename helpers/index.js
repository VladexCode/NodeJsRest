const dbValidators = require('./validaciones.helper');
const generarJWT   = require('./generar-jwt');
//const googleVerify = require('./google-verify');
const subirArchivo = require('./subirArchivo.helper');


module.exports = {
    ...dbValidators,
    ...generarJWT,
  //  ...googleVerify,
    ...subirArchivo,
}