import React, { useState, useContext } from "react";
import { api } from "../api/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", formData);
      login(response.data);
      toast.success("Login successful!");
      navigate("/tasks");
    } catch (error) {
      toast.error(error.response.data.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};
