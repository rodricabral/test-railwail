const { dBconnection } = require("../connectDB/dBconnection");
const { DataTypes } = require("sequelize");

const Cliente = dBconnection.define('Cliente', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cuit: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Cliente.sync({})
.then(() => {
  console.log("Tabla de Proveedores Creada");
})
.catch((error) => {
  console.log(error);
});

module.exports = Cliente;