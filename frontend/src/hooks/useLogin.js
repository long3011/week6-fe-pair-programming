import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (setIsAuthenticated) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "Login failed");
      }

      // Save user to localStorage
      sessionStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      setError("Something went wrong, please try again.");
      console.error(err);
      setIsLoading(false);
    }
  };

  return { email,setEmail,password,setPassword,handleLogin, isLoading, error };
};
