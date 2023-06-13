import { Role, User } from "../Models/index.js";
//Si deseo mostrar que Role tiene el usuario, debo importar acá directamente Role
// para no hacer consultas innecesarias. Directamente lo muestro desde acá.

class UserController {
  constructor() {}
  // el metodo 'build' me hace un 'New User', 'save' me lo guarda en la DB.
  // el método 'create' hace ambas.
  getAllUsers = async (req, res, next) => {
    try {
      //   const result = await User.findAll(); // PARA TRAERME TODO
      const result = await User.findAll({
        attributes: ["id", "userName", "password", "firstName", "lastName", "idRole"],
        // Para filtrar que información me traiga, o incluso podria traer todo pero por este método.
        include: [{
          model: Role,
          attributes:["roleName"],
        }]
      });
      if (result.length === 0)
        throw new Error("No se pudieron encontrar usuarios");
      res.status(200).send({ success: true, message: "Usuarios encontrados" });
    } catch (error) {
      res.status(400);
    }
  };
  getUserByID = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.findAll({
        where: {
          id: id,
        },
      });
      if (result.length === 0) throw new Error("No se encontró el usuarios");
      res.status(200).send({ success: true, message: "Usuario encontrado" });
    } catch (error) {
      res.status(400);
    }
  };
  createUser = async (req, res, next) => {
    try {
      const { userName, firstName, lastName } = req.body;
      const result = await User.create({ userName, firstName, lastName });
      //   console.log("🚀 result:", result.dataValues);
      if (!result.dataValues) throw new Error("No se pudo crear el usuario");
      res.status(200).send({ success: true, message: "Usuario encontrados" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  updateUserByID = async (req, res, next) => {
    try {
    } catch (error) {
      res.status(400);
    }
  };
  deleteUserByID = async (req, res, next) => {
    try {
    } catch (error) {
      res.status(400);
    }
  };

  login = async (req, res, next) => {
    try {
      const { userName, password } = req.body;
      const result = await User.findOne({
        where: {
          userName: userName,
        },
      });
      if (!result) throw new Error("Credenciales incorrectas");
      //ACÁ IRÍA EL USO DE JWT.

      //Uso el bcrypt para comparar la contraseña ingresada por POST con la que posee el usuario.
      const compare = await result.validatePassword(password, result.password);
      if (!compare) throw new Error("Credenciales incorrectas");

      res.status(200).send({ success: true, message: "Inicio de sesión concretado" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  }
}

export default UserController;
