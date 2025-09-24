import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { signup, isLoading, error } = useSignup();
  const navigate = useNavigate();
  const [formError, setFormError] = useState(null);

  const handleSignup = async () => {
    // client-side validation
    if (password !== password2) {
      setFormError("Passwords do not match");
      return;
    }

    const user = await signup(email, password);
    if (user) {
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>

      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />

      <label>
        Confirm Password:
        <input
          type="password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleSignup} disabled={isLoading}>
        {isLoading ? "Signing up..." : "Sign Up"}
      </button>

      {(formError || error) && (
        <p style={{ color: "red" }}>{formError || error}</p>
      )}
    </div>
  );
};

export default SignupComponent;
