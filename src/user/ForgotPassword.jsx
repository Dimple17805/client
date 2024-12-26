import React, { useState, useEffect } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(30); 
  const [canResend, setCanResend] = useState(false);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/request-password", { email });
      setMessage(response.data.message);
      setIsOtpSent(true);
      setCountdown(30);
    } catch (error) {
      setError(error.response?.data?.message || "Error sending OTP");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/verifie-otp", { email, otp });
      setMessage(response.data.message);
      setIsOtpVerified(true);
    } catch (error) {
      
      setError(error.response?.data?.message || "Error verifying OTP");
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/resend-otp", { email });
      setMessage(response.data.message);
      setCountdown(30);
    } catch (error) {
      setError(error.response?.data?.message || "Error resending OTP");
    }
  };
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/reset-password", { email, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setError(error.response?.data?.message || "Error resetting password");
    }
  };

  // OTP countdown
  useEffect(() => {
    if (countdown > 0 && isOtpSent) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, isOtpSent]);

  return (
    <div>
      <h2>Reset Password</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      {!isOtpSent && (
        <form onSubmit={handleRequestOtp}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      )}

      {isOtpSent && !isOtpVerified && (
        <form onSubmit={handleVerifyOtp}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
          <p>Time remaining: {Math.floor(countdown / 60)}:{countdown % 60}</p>
          {canResend && <button onClick={handleResendOtp}>Resend OTP</button>}
        </form>
      )}

      {isOtpVerified && (
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
