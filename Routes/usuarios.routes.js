const { Router } = require("express");

const { check } = require("express-validator");
const router = Router();

const {
  UsuariosGet,
  UsuariosPost,
  UsuariosDelete,
  UsuariosPut,
  UsuariosPatch,
} = require("../Controllers/usuarios.controllers");
const {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
} = require("../helpers/validaciones.helper");
const { validarCampos } = require("../middlewares/validar-usuario.middleware");
const roleModel = require("../Models/role.model");

router.get("/", UsuariosGet);
router.post(
  "/",
  [
    check("nombre", "eel nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe tenr 3 letras").isLength({ min: 3 }),
    check("correo", "el correo no ees valido").isEmail(),
    check("rol", "No es un rol valido").isIn(["ADMIN", "USER"]),
    check("correo").custom(emailExiste),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check("rol").custom(esRoleValido),
    validarCampos,
    /* check('rol').custom(async (rol='')=>{
        const existeRol = await roleModel.findOne({rol});
        if (!existeRol) {
            throw new Error(`el rol ${rol} no es valido`);
        }
    }),*/
  ],
  UsuariosPost
);
router.delete(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  UsuariosDelete
);
router.put(
  "/:id",
  [
    check("id", "No es un ID válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(esRoleValido),
    validarCampos,
  ],
  UsuariosPut
);
router.patch("/", UsuariosPatch);

module.exports = router;
