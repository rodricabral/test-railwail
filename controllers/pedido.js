const Pedido = require('../models/Pedido');
const { response } = require("express");

const getAllPedidos = async (req, res = response) => {
    try {
        const pedido = await Pedidos.findAll();
        res.json(pedido)
    } catch (error) {
        console.log(error)
    }
}

const createPedido = async (req, res = response) => {
    try {
        const pedido = new Pedido(req.body)
        await pedido.save();
        res.json(pedido)
    } catch (error) {
        console.log(error)
    }
}

const updatePedido = async (req, res = response) => {
    try {
        const { id } = req.params;
        const pedido = await Pedido.findByPk(id);
        pedido.clienteId = req.body.clienteId;
        pedido.saldoTotal = req.body.saldoTotal;
        pedido.fechaCreacion = req.body.fechaCreacion;
        pedido.productoId = req.body.productoId;
        pedido.cantidad = req.body.cantidad;
        pedido.id = req.body.id;
        await pedido.save()
        res.json(pedido)
    } catch (error) {
        console.log(error)
    }
}

const deletePedido = async (req, res = response) => {
    try {
       const { id } = req.params
       const pedido = await Pedido.findByPk(id)
       await pedido.destroy()
       res.json({msg: "Proveedor eliminado"})
    } catch (error) {
       console.log(error)
    }
   }

module.exports = {
    getAllPedidos,
    createPedido,
    updatePedido,
    deletePedido
};




