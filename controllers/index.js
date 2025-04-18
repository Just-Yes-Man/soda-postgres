const models = require("../database/models");

const createRefresco = async (req, res) => {
    console.log('creating refresco');

    try {
        const refresco = await models.Refresco.create(req.body);
        return res.status(201).json({ refresco });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const deleteRefresco = async (req, res) => {
    console.log('deleting refresco...');

    try {
        const refresco = await models.Refresco.findOne({ where: { id: req.params.id } });
        if (refresco) {
            console.log(refresco);
            await refresco.destroy();
        }
        else {
            return res.status(200).json({ "error ": req.params.id + " no existe" });
        }
        return res.status(200).json({ "deleted ": req.params.id });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const updateRefresco = async (req, res) => {
    console.log('updating Refresco...');

    try {
        const refresco = await models.Refresco.findOne({ where: { id: req.params.id } });
        if (refresco) {
            console.log(refresco);
            refresco.nombre = req.body.nombre;
            refresco.marca = req.body.marca;
            refresco.tipo = req.body.tipo;
            refresco.sabor = req.body.sabor;
            refresco.tamano = req.body.tamano;
            refresco.precio = req.body.precio;
            refresco.stock = req.body.stock;
            await refresco.save();
        }
        else {
            return res.status(200).json({ "error ": req.params.id + " no existe" });
        }

        return res.status(200).json({ "updated ": refresco });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};



const getAllRefrescos = async (req, res) => {
    console.log('getting Refrescos');

    try {
        const refrescos = await models.Refresco.findAll({
            include: []
        });

        return res.status(200).json({ refrescos });
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
};


const getRefresco = async (req, res) => {
    console.log('updating Refresco...');

    try {
        const refresco = await models.Refresco.findOne({ where: { id: req.params.id } });
        if (!refresco) {
            return res.status(200).json({ "error": req.params.id + " no existe" });
        }

        return res.status(200).json({ "refresco": refresco });
    }
    catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createRefresco,
    getAllRefrescos,
    deleteRefresco,
    updateRefresco,
    getRefresco
};
