import jwt from "jsonwebtoken";
import { config } from "../../config/config.js";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", ""); // Extraemos el token
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET); // Verificamos el token
    req.user = decoded; // Guardamos los datos del usuario en la solicitud
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
