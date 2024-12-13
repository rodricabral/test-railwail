const Proveedores = require('../models/Proveedores');
const { response } = require("express");

const getAllProveedores = async (req, res = response) => {
 try {
    const proveedores = await Proveedores.findAll();
    res.json(proveedores)
 } catch (error) {
    console.log(error)
 }
}
const createProveedor = async (req, res = response) => {
    try {
       const proveedores = new Proveedores(req.body);
       await proveedores.save();
       res.json(proveedores)
    } catch (error) {
       console.log(error)
    }
   }

   const updateProveedor = async (req, res = response) => {
    try {
       const { id } = req.params;
       const proveedores = await Proveedores.findByPk(id)
       proveedores.nombre = req.body.nombre
       proveedores.cuit = req.body.cuit
       await proveedores.save()
       res.json(proveedores)
    } catch (error) {
       console.log(error)
    }
   }

   const deleteProveedor = async (req, res = response) => {
    try {
       const { id } = req.params
       const proveedores = await Proveedores.findByPk(id)
       await proveedores.destroy()
       res.json({msg: "Proveedor eliminado"})
    } catch (error) {
       console.log(error)
    }
   }

   module.exports = {
    getAllProveedores,
    createProveedor,
    updateProveedor,
    deleteProveedor
   }