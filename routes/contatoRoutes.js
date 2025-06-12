const express = require("express")
const router = express.Router()
const Contatos = require('../models/Contato');
const { default: mongoose } = require("mongoose");

// Listar contatos
router.get('/', async (req, res) => {
    const dados = await Contatos.find();
    res.json(dados)
})

// Criar contato
router.post('/', async (req, res) => {
    const dados = await Contatos.create(req.body);
    res.status(200).json(dados)
})

//Buscar por ID
router.get('/:id', async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({"error": "Id enviado não é válido"})
        }
        const dado = await Contatos.findById(req.params.id);
        if (!dado) {
            return res.status(404).json({ error: "erro, não achamos o id" })
        }
        res.status(200).json(dado)
    }
    catch (err) {
        res.status(404).json({"error": err.message})
    }
})

module.exports = router