const Role = require("../Models/role.model");
const Usuario = require("../Models/usuario.model");
const Categoria = require("../Models/categorias.model");
const productoModel = require("../Models/producto.model");


const esRoleValido = async (rol = "") => {
  const existeRol = await Role.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no está registrado en la BD`);
  }
};

const emailExiste = async (correo = "") => {
  // Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo: ${correo}, ya está registrado`);
  }
};

const existeUsuarioPorId = async (id) => {
  // Verificar si el correo existe
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id no existe ${id}`);
  }
};

/**
 * Categorias
 */
 const existeCategoriaPorId = async( id ) => {

  // Verificar
  const existeCategoria = await Categoria.findById(id);
  if ( !existeCategoria ) {
    console.log("error",existeCategoriaPorId);
      throw new Error(`El id no existe ${ id }`);
  }
  console.log("paso");
}

/**
* Productos
*/
const existeProductoPorId = async( id ) => {

  // Verificar si el correo existe
  const existeProducto = await productoModel.findById(id);
  if ( !existeProducto ) {
      throw new Error(`El id no existe ${ id }`);
  }
}



/**
 * Validar colecciones permitidas
 */
 const coleccionesPermitidas = ( coleccion = '', colecciones = []) => {

  const incluida = colecciones.includes( coleccion );
  if ( !incluida ) {
      throw new Error(`La colección ${ coleccion } no es permitida, ${ colecciones }`);
  }
  return true;
}


module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
  existeProductoPorId,
  existeCategoriaPorId,
  coleccionesPermitidas
};
