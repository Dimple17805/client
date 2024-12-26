import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Send signup details and request OTP
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending signup request");
      const response = await axios.post("http://localhost:5000/api/signup", { email, password });
      console.log("Signup response:", response.data);
      alert(response.data.message);
      setIsOtpSent(true); // Show OTP input after sending OTP
    } catch (error) {
      console.error("Error signing up", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Error signing up");
    }
  };

  // Verify OTP
  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending OTP verification request");
      const response = await axios.post("http://localhost:5000/api/verify-otp", { email, password, otp });
      console.log("OTP verification response:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Error verifying OTP", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Error verifying OTP");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Link to='/login'><p>already have an account? Loggin</p></Link>
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {!isOtpSent ? (
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleOtpVerification}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
