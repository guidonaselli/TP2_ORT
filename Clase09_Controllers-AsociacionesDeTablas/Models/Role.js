import { DataTypes as DT } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";


const Role = connectionDb.define(
    'Role', 
    {
  // Model attributes are defined here
  roleName: {
    type: DT.STRING,
    allowNull: false,
    defaultValue: "User",
  },
  
  
}, {
  // Other model options go here
  timestamps: false,
});

// `connectionDb.define` also returns the model
console.log(Role === connectionDb.models.Role); // true

export default Role