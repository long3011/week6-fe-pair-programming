import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = (setIsAuthenticated) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();


  const handleSignup = async () => {
    setIsLoading(true);
    setError(null);
    if (password !== password2) {
      setFormError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error || "Signup failed");
      }

      // Save user in localStorage
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

  return { email, setEmail, password, setPassword, password2, setPassword2, formError, setFormError, handleSignup, isLoading, error };
};
