const express = require("express")
const router = express.Router()
const Contatos = require('../models/Contato')

// Listar contatos
router.get('/', async (req, res) =>{
    const dados = await Contatos.find();
    res.json(dados)
})

// Criar contato
router.post('/', async (req, res) =>{
    const dados = await Contatos.create(req.body);
    res.status(200).json(dados)
})

module.exports = router