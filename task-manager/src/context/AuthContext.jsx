import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Guardar los datos del usuario
    localStorage.setItem("token", userData.token); // Almacenar el token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token"); // Eliminar el token al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
