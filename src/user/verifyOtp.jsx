import React, { useState } from "react";
import axios from "axios";

function Verify({ email, onVerified, action }) {
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = action === "signup" ? "/verify-otp" : "/verify-login-otp";
      const response = await axios.post(`http://localhost:5000/api${endpoint}`, { email, otp });
      alert(response.data.message);
      if (response.data.message === "User created successfully" || response.data.message === "Login successful") {
        onVerified();
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
      alert("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default Verify;
