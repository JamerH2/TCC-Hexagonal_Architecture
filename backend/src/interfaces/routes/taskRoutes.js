import express from "express";
import { TaskController } from "../controllers/TaskController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rutas protegidas para las tareas
router.post("/", authenticate, TaskController.createTask); // Crear tarea
router.get("/", authenticate, TaskController.getTasks); // Obtener tareas
router.put("/:id", authenticate, TaskController.updateTask); // Actualizar tarea
router.delete("/:id", authenticate, TaskController.deleteTask); // Eliminar tarea

export default router;
