import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

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
        return null;
      }

      // Save user in localStorage
sessionStorage.setItem("user", JSON.stringify(json));

      setIsLoading(false);
      return json;
    } catch (err) {
      setError("Something went wrong, please try again.");
      setIsLoading(false);
      return null;
    }
  };

  return { signup, isLoading, error };
};
