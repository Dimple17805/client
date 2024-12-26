import React, { useState } from "react";
import axios from "axios";
import { FaEye} from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false)
  
  const togglePassowrdVibility = (e) => {
    e.preventDefault()
    setPasswordVisible(!passwordVisible)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post
      ("http://localhost:5000/api/login", { email, password });
      alert(response.data.message);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Error occurred");
    }
    
  };

  return (
    <div>
      <h1>ur waifu loves u shubu</h1>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
     
        <input
          type="email"
          placeholder="Emaiiiiiiiiiiiiiiiiiiii"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div>
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={togglePassowrdVibility}>
        {passwordVisible ? <FaEye size={20} /> : <FaEye size={20} />}
        </button></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
