const moongose = require("mongoose");

const UsuarioSchema = new moongose.Schema(
  {
    email: { type: String, required: true },
    senha: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = moongose.model("Usuario", UsuarioSchema);
