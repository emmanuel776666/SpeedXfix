import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Brand */}
        <div className="login-brand">
          <div className="login-brand-mark">S</div>

          <div>
            <span className="login-brand-name">SpeedXFix</span>
            <span className="login-brand-tagline">Service. Simplified.</span>
          </div>
        </div>

        {/* Login content */}
        <div className="login-content">

          {/* Header */}
          <div className="login-header">
            <h1>
              Welcome back
            </h1>

            <p>
              Login to your SpeedXFix account
              <br />
              to continue
            </p>
          </div>

          <form className="login-form">

            {/* Email */}
            <div className="login-field">
              <label htmlFor="login-email">Email</label>

              <div className="login-input">
                <Mail size={18} />

                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <label htmlFor="login-password">Password</label>

              <div className="login-input">
                <Lock size={18} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>

              <div className="forgot-password">
                <Link to="/forgot-password">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign in */}
            <button
              type="submit"
              className="login-submit-btn"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="login-divider">
            <span />
            <p>or</p>
            <span />
          </div>

          {/* Google */}
          <button
            type="button"
            className="google-signin-btn"
          >
            <svg
              className="google-icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42z"
              />

              <path
                fill="#34A853"
                d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.5z"
              />

              <path
                fill="#FBBC05"
                d="M6.54 13.58A5.86 5.86 0 0 1 6.23 12c0-.55.1-1.08.31-1.58V7.89H3.3A9.75 9.75 0 0 0 2.25 12c0 1.57.38 3.06 1.05 4.11l3.24-2.53z"
              />

              <path
                fill="#EA4335"
                d="M12 6.39c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.49 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.39l3.24 2.53C7.31 8.11 9.46 6.39 12 6.39z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Signup */}
          <p className="login-signup-text">
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>

        </div>

        {/* Bottom security note */}
        <div className="login-security">
          <Lock size={13} />
          <span>Your information is securely encrypted</span>
        </div>

      </div>
    </div>
  );
}

export default Login;