import mongoose from "mongoose";

// Definimos el esquema de la entidad Usuario
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Nombre del usuario
  email: { type: String, required: true, unique: true }, // Email único
  password: { type: String, required: true }, // Contraseña encriptada
});

// Exportamos el modelo de usuario basado en el esquema
export const UserModel = mongoose.model("User", UserSchema);
