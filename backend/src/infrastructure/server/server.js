import express from "express";
import cors from "cors"; // Middleware para permitir solicitudes desde otros dominios
import { config } from "../../config/config.js";
import authRoutes from "../../interfaces/routes/authRoutes.js";
import taskRoutes from "../../interfaces/routes/taskRoutes.js"; // Importa las rutas de tareas

export class Server {
  constructor() {
    this.app = express(); // Inicializamos Express
    this.port = config.PORT; // Configuramos el puerto
    this.middlewares(); // Configuramos los middlewares
    this.routes(); // Configuramos las rutas
  }

  middlewares() {
    this.app.use(cors()); // Habilitamos CORS
    this.app.use(express.json()); // Middleware para manejar datos en formato JSON
  }

  routes() {
    this.app.use("/api/auth", authRoutes); // Registramos las rutas de autenticación
    this.app.use("/api/tasks", taskRoutes); // Registramos las rutas de tareas
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}
