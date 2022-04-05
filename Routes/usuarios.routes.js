const { Router } = require("express");
const router = Router();
const {
  UsuariosGet,
  UsuariosPost,
  UsuariosDelete,
  UsuariosPut,
  UsuariosPatch,
} = require("../Controllers/usuarios.controllers");

router.get("/", UsuariosGet);
router.post("/", UsuariosPost);
router.delete("/", UsuariosDelete);
router.put("/", UsuariosPut);
router.patch("/", UsuariosPatch);

module.exports = router;
