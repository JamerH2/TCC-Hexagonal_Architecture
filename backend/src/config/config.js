import dotenv from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000, // Puerto del servidor
  MONGO_URI: process.env.MONGO_URI, // URI de conexión a MongoDB
  JWT_SECRET: process.env.JWT_SECRET, // Clave secreta para JWT
};
