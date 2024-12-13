const Producto = require('../models/Producto');
const { response } = require('express');

const getAllProductos = async (req, res = response) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos)
    } catch (error) {
        console.log(error)
    }
}

const createProducto = async (req, res = response) => {
    try {
        const productos = new Producto(req.body)
        await productos.save();
        res.json(productos)
    } catch (error) {
        console.log(error)
    }
}

const updateProducto = async (req, res = response) => {
    try {
        const { id } = req.params;
        const productos = await Producto.findByPk(id);
        productos.nombre = req.body.nombre;
        productos.nombreComercial = req.body.nombreComercial;
        productos.seleccion = req.body.seleccion;
        productos.precioVenta = req.body.precioVenta;
        productos.proveedor = req.body.proveedor;
        productos.precioCompra = req.body.precioCompra;
        productos.fotoProducto = req.body.fotoProducto;
        await productos.save()
        res.json(productos)
    } catch (error) {
        console.log(error)
    }
}

const deleteProducto = async (req, res = response) => {
    try {
        const { id } = req.params;
        const productos = await Producto.findByPk(id);
        await productos.destroy();
        res.json({msg: "Producto eliminado"});
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProductos,
    createProducto,
    updateProducto,
    deleteProducto
}