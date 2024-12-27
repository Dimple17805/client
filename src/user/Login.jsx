import React, { useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await axios.post(
        "https://server-35lt.onrender.com/api/login", // Replace with your Render backend URL
        { email, password }
      );
      alert(response.data.message); // Success message
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Link to="/signup" style={{ display: "block", textAlign: "center", marginBottom: "10px" }}>
        Signup
      </Link>

      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
        />

        {/* Password Input */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ flex: "1", padding: "10px", borderRadius: "5px", marginRight: "5px" }}
          />
          <button
            onClick={togglePasswordVisibility}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaEye size={20} color={passwordVisible ? "blue" : "gray"} />
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "10px",
            background: isLoading ? "gray" : "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
