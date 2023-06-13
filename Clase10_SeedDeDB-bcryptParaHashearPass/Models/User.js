import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";
import bcrypt from 'bcrypt'

class User extends Model {
  //Hago métodos que son de esta instancia
  async validatePassword(password, hash){
    //comparo la contraseña ingresada con la hasheada y lo retorno
    return await bcrypt.compare(password, hash);
  }
}

User.init({ //En el primer objeto le paso los campos a crear
  // Model attributes are defined here
  userName: {
    type: DT.STRING,
    allowNull: false,
    validate:{
      len: [2, 50],
    }
  },
  password: {
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
  },
  salt:{
    type: DT.STRING,
  }
}, { // Y en el segundo objeto las opciones de modelado (base de datos)
  // Other model options go here
  sequelize: connectionDb, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: false,
});

// the defined model is the class itself
console.log(User === connectionDb.models.User); // true

//Sequelize Hooks
  //"Antes de que se cree"
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;

  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
})

export default User;