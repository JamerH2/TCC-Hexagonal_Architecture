import bcrypt from "bcrypt"; // Biblioteca para encriptar contraseñas

export class RegisterUser {
  constructor(userRepository) {
    this.userRepository = userRepository; // Repositorio de usuarios
  }

  async execute(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10); // Encriptamos la contraseña
    const user = { ...data, password: hashedPassword }; // Creamos un objeto usuario con la contraseña encriptada
    return await this.userRepository.save(user); // Guardamos el usuario en la base de datos
  }
}
