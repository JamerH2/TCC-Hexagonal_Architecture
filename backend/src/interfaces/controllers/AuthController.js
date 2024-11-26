import { UserRepository } from "../../infrastructure/repositories/UserRepository.js";
import { RegisterUser } from "../../application/useCases/RegisterUser.js";
import { LoginUser } from "../../application/useCases/LoginUser.js";

const userRepository = new UserRepository();
const registerUser = new RegisterUser(userRepository);
const loginUser = new LoginUser(userRepository);

export class AuthController {
  static async register(req, res) {
    try {
      const userData = req.body; // Obtenemos los datos del cuerpo de la solicitud
      const user = await registerUser.execute(userData); // Ejecutamos el caso de uso
      res.status(201).json(user); // Respondemos con el usuario creado
    } catch (error) {
      res.status(400).json({ error: error.message }); // Respondemos con un error
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body; // Obtenemos email y contraseña del cuerpo de la solicitud
      const result = await loginUser.execute(email, password); // Ejecutamos el caso de uso
      res.status(200).json(result); // Respondemos con el token y datos del usuario
    } catch (error) {
      res.status(401).json({ error: error.message }); // Respondemos con un error
    }
  }
}
