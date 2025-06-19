const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuario = require("../models/Usuario");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  const dado = await Usuario.findOne({ email });
  if (!dado) {
    return res.status(401).json({ mensagem: "Usuário não encontrado" });
  }

  //const senhaCriptografada = await bcrypt.hash(senha, 10);

  const senhaValida = await bcrypt.compare(senha, dado.senha);
  if (!senhaValida) {
    return res.status(401).json({ mensagem: "Senha inválida" });
  }

  console.log("Usuário logado com sucesso");
});

module.exports = router;
