import { useSignup } from "../hooks/useSignup";

const SignupComponent = ({setIsAuthenticated}) => {
  const { email,
      setEmail,
      password,
      setPassword,
      password2,
      setPassword2,
      formError,
      setFormError,
      handleSignup,
      isLoading,
      error } = useSignup(setIsAuthenticated);

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
