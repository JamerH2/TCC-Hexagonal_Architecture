import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Título de la tarea
    description: { type: String }, // Descripción opcional de la tarea
    completed: { type: Boolean, default: false }, // Estado de la tarea
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Usuario asociado
  },
  { timestamps: true } // Añade campos de creación y actualización
);

export const Task = mongoose.model("Task", taskSchema); // Exportamos el modelo
