import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class User extends Model {}

User.init({ //En el primer objeto le paso los campos a crear
  // Model attributes are defined here
  userName: {
    type: DT.STRING,
    allowNull: false,
    validate:{
      len: [2, 50],
    }
  },
  firstName: {
    type: DT.STRING,

    // allowNull defaults to true
  },
  lastName: {
    type: DT.STRING,

    // allowNull defaults to true
  },
  idRole:{
    type: DT.INTEGER,
  }
}, { // Y en el segundo objeto las opciones de modelado (base de datos)
  // Other model options go here
  sequelize: connectionDb, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: false,
});

// the defined model is the class itself
console.log(User === connectionDb.models.User); // true

export default User;