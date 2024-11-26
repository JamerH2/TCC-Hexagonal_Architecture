import axios from "axios";

// Base URL para la API
export const api = axios.create({
  baseURL: "http://localhost:5000/api", // Cambiar si tu backend tiene otra URL
});

// Interceptor para añadir el token JWT a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Obtener el token desde el almacenamiento local
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Añadir el token al header
  }
  return config;
});
