// Importamos el servidor y el cliente de MongoDB
import { Server } from "./infrastructure/server/Server.js";
import { MongoDBClient } from "./infrastructure/database/MongoDBClient.js";

// Inicializamos el servidor
const server = new Server();

// Conectamos a la base de datos
MongoDBClient.connect();

// Iniciamos el servidor
server.start();
