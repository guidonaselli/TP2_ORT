import { DataTypes as DT, Model } from "sequelize";
import connectionDb from "../connectionDb/connectionDb.js";

class Category extends Model {}

Category.init({ //En el primer objeto le paso los campos a crear
  
  categoryName: {
    type: DT.STRING(50),
    allowNull: false
  },
}, { // Y en el segundo objeto las opciones de modelado (base de datos)
  
  sequelize: connectionDb, // We need to pass the connection instance
  modelName: 'Category' // We need to choose the model name
});

// the defined model is the class itself
console.log(Category === connectionDb.models.Category); // true

export default Category;