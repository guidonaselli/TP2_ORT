import Category from "./Category.js";
import Role from "./Role.js";
import User from "./User.js";

// Relaciones entre tablas
Role.hasMany(User, {
    foreignKey:{
        name:"idRole",
    }
});
User.belongsTo(Role, {
    foreignKey:{
        name:"idRole",
    }
})
        // Para que no se llame RoleId tenemos que agregarle aca laas foreingkey
        // y además agregar el atributo en la clase User



export { Category, User, Role }