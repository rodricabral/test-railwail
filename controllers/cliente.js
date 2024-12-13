const Cliente = require('../models/Cliente');
const { response } = require("express");

const getAllClientes = async (req, res = response) => {
    try {
        const cliente = await Cliente.findAll();
        res.json(cliente)
    } catch (error) {
        console.log(error)
    }
}

const createCliente = async (req, res = response) => {
    try {
        const cliente = new Cliente(req.body)
        await cliente.save();
        res.json(cliente)
    } catch (error) {
        console.log(error)
    }
}

const updateCliente = async (req, res = response) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findByPk(id);
        cliente.nombre = req.body.nombre;
        cliente.cuit = req.body.cuit;
        await cliente.save()
        res.json(cliente)
    } catch (error) {
        console.log(error)
    }
}

const deleteCliente = async (req, res = response) => {
    try {
       const { id } = req.params
       const cliente = await Cliente.findByPk(id)
       await cliente.destroy()
       res.json({msg: "Proveedor eliminado"})
    } catch (error) {
       console.log(error)
    }
   }


module.exports ={
    getAllClientes,
    createCliente,
    updateCliente,
    deleteCliente
}