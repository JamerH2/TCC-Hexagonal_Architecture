import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await api.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  };

  const addTask = async () => {
    try {
      await api.post("/tasks", { title: newTask });
      setNewTask("");
      fetchTasks();
      toast.success("Task added!");
    } catch (error) {
      toast.error("Failed to add task");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
      toast.success("Task deleted!");
    } catch (error) {
      toast.error("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
