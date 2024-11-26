export class TaskUseCases {
    constructor(taskRepository) {
      this.taskRepository = taskRepository; // Inyección del repositorio
    }
  
    async createTask(taskData) {
      return await this.taskRepository.save(taskData); // Crear y guardar tarea
    }
  
    async getTasksByUser(userId) {
      return await this.taskRepository.findAllByUser(userId); // Obtener todas las tareas de un usuario
    }
  
    async updateTask(taskId, updates) {
      return await this.taskRepository.update(taskId, updates); // Actualizar tarea
    }
  
    async deleteTask(taskId) {
      return await this.taskRepository.delete(taskId); // Eliminar tarea
    }
  }
  