import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email && password) {
      navigate("/Dashboard");
    } else {
      alert("Please enter email and password");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <div style={styles.logo}>S</div>

        <h1 style={styles.title}>Welcome Back</h1>

        <p style={styles.subtitle}>Login to continue to Spendly</p>

        <form onSubmit={handleLogin}>
          <label style={styles.label}>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <label style={styles.label}>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>

        <Link to="/" style={styles.back}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    backgroundColor: "#FFF8F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  card: {
    width: "380px",
    backgroundColor: "#ffffff",
    padding: "35px",
    border: "1px solid #E8DDD6",
    borderRadius: "18px",
  },

  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "12px",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  title: {
    textAlign: "center",
    color: "#241C18",
    margin: "0",
    fontSize: "26px",
  },

  subtitle: {
    textAlign: "center",
    color: "#766A63",
    fontSize: "14px",
    marginBottom: "28px",
  },

  label: {
    display: "block",
    color: "#241C18",
    fontSize: "14px",
    marginBottom: "7px",
  },

  input: {
    width: "100%",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #E8DDD6",
    borderRadius: "10px",
    backgroundColor: "#FFF8F5",
    color: "#241C18",
    outline: "none",
    marginBottom: "18px",
    fontSize: "14px",
  },

  loginButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#8B6845",
    color: "#FFF8F5",
    cursor: "pointer",
    fontSize: "14px",
  },

  signup: {
    textAlign: "center",
    color: "#766A63",
    fontSize: "14px",
    marginTop: "22px",
  },

  signupLink: {
    color: "#8B6845",
    textDecoration: "none",
    fontWeight: "bold",
  },

  back: {
    display: "block",
    textAlign: "center",
    marginTop: "18px",
    color: "#766A63",
    textDecoration: "none",
    fontSize: "13px",
  },
};

export default Login;