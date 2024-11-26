import { Task } from "../../domain/entities/Task.js";

export class TaskRepository {
  async findAllByUser(userId) {
    return await Task.find({ userId }); // Encuentra todas las tareas del usuario
  }

  async findById(taskId) {
    return await Task.findById(taskId); // Encuentra una tarea por ID
  }

  async save(taskData) {
    const task = new Task(taskData); // Crea una nueva tarea
    return await task.save(); // La guarda en la base de datos
  }

  async update(taskId, updates) {
    return await Task.findByIdAndUpdate(taskId, updates, { new: true }); // Actualiza la tarea y devuelve el nuevo documento
  }

  async delete(taskId) {
    return await Task.findByIdAndDelete(taskId); // Elimina la tarea
  }
}
