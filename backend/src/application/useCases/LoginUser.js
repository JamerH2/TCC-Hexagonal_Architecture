import jwt from "jsonwebtoken"; // Biblioteca para generar JWT
import bcrypt from "bcrypt";
import { config } from "../../config/config.js";

export class LoginUser {
  constructor(userRepository) {
    this.userRepository = userRepository; // Repositorio de usuarios
  }

  async execute(email, password) {
    const user = await this.userRepository.findByEmail(email); // Buscamos el usuario por email

    if (!user) {
      throw new Error("User not found"); // Lanzamos un error si no existe
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); // Comparamos la contraseña
    if (!isPasswordValid) {
      throw new Error("Invalid password"); // Lanzamos un error si es incorrecta
    }

    // Generamos un token JWT
    const token = jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, {
      expiresIn: "1h", // El token expira en 1 hora
    });

    return { token, user: { id: user._id, name: user.name, email: user.email } }; // Retornamos el token y los datos del usuario
  }
}
