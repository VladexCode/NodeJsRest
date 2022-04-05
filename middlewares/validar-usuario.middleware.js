const {validationResult}=require("express-validator");

//muestra el resultado de errores si existe
const validarCampos=(req,res,next)=>{
const errors=validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json(errors);
  }
  next();
}

module.exports={
    validarCampos
}