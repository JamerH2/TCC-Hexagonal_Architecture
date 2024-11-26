import express from "express";
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();

// Ruta para registrar usuarios
router.post("/register", AuthController.register);

// Ruta para iniciar sesión
router.post("/login", AuthController.login);

export default router;
