import { TaskRepository } from "../../infrastructure/repositories/TaskRepository.js";
import { TaskUseCases } from "../../application/useCases/TaskUseCases.js";

const taskRepository = new TaskRepository();
const taskUseCases = new TaskUseCases(taskRepository);

export class TaskController {
  static async createTask(req, res) {
    try {
      const taskData = { ...req.body, userId: req.user.id }; // Agregamos el usuario autenticado
      const task = await taskUseCases.createTask(taskData);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getTasks(req, res) {
    try {
      const tasks = await taskUseCases.getTasksByUser(req.user.id); // Usuario autenticado
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateTask(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const updatedTask = await taskUseCases.updateTask(id, updates);
      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteTask(req, res) {
    try {
      const { id } = req.params;
      await taskUseCases.deleteTask(id);
      res.status(204).send(); // No hay contenido
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
