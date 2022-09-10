import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuth, email, pass, setEmail, setPass }) {
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();
    fetch("http://localhost:5500/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.auth) {
          setAuth(data.auth);
          navigate("/dashboard");
        } else {
          alert("Enter the correct details please!!!");
        }
      })
      .catch((err) => {
        alert("Error");
      });
  }
  return (
    <div className="login-box">
      <h2>Login Page</h2>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Enter your email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          type="email"
        />
        <label htmlFor="password">Enter your password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          id="password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
