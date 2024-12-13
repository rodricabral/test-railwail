const { dBconnection } = require("../connectDB/dBconnection");
const { DataTypes } = require("sequelize");

const Pedido = dBconnection.define('Pedido', {

    clienteId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    saldoTotal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull:false
    },
    productoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

Pedido.sync({})
  .then(() => {
    console.log("Tabla de Pedido Creada");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = Pedido