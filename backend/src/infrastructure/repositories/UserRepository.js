import { UserModel } from "../../domain/entities/User.js";

export class UserRepository {
  async findByEmail(email) {
    return await UserModel.findOne({ email }); // Buscar un usuario por email
  }

  async save(user) {
    const newUser = new UserModel(user); // Crear un nuevo documento de usuario
    return await newUser.save(); // Guardarlo en la base de datos
  }
}
