const { dBconnection } = require("../connectDB/dBconnection");
const { DataTypes } = require("sequelize");

const Proveedores = dBconnection.define('Proveedores', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Proveedores.sync({})
.then(() => {
  console.log("Tabla de Proveedores Creada");
})
.catch((error) => {
  console.log(error);
});

module.exports = Proveedores;
