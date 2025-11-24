import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login=()=> {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to continue</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Frontend only — no backend connected.");
          }}
        >
          <div className="field">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" />
          </div>

          <button className="login-btn" type="submit">Login</button>
        </form>

        <div className="extra">
          <Link to="#">Forgot Password?</Link>
          <p>
            Don’t have an account?
            <Link to="#"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;