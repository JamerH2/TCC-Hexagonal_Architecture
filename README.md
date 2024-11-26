#CIPA: HACKERS
JAMER HERNANDEZ
REYNALDO ESPITIA


# Task Manager - Full Stack Project

Este proyecto es una aplicación para la gestión de tareas, que incluye funcionalidades de autenticación (registro e inicio de sesión) y un CRUD completo de tareas. Está construido utilizando arquitectura hexagonal.

## Tecnologías utilizadas

### Backend:
- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para el servidor web.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de datos.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT**: Para la autenticación basada en tokens.

### Frontend:
- **React.js**: Biblioteca para construir interfaces de usuario.
- **Axios**: Cliente HTTP para interactuar con el backend.
- **React Router DOM**: Manejo de rutas en la aplicación React.
- **React Toastify**: Notificaciones en la interfaz.

---

## Requisitos previos

1. Tener instalado:
   - **Node.js** (v16 o superior).
   - **MongoDB** (puede ser local o en la nube, como Atlas).
   - Un navegador web.

2. Configurar las variables de entorno en el backend:
   - Crear un archivo `.env` en el directorio raíz del backend y agregar las siguientes variables:
     ```env
     PORT=5000
     MONGO_URI=<TU_URI_DE_MONGODB>
     JWT_SECRET=<TU_SECRETO_JWT>
     ```

---

## Cómo ejecutar el proyecto

### 1. Backend

1. **Ir al directorio del backend**:
   ```bash
   cd backend
   npm run dev

   El backend estará corriendo en http://localhost:5000

### 2. frontend

1. **Ir al directorio del frontend**:
   ```bash
   cd task-manager
   npm start
   El frontend estará disponible en http://localhost:3000.