
function Login() {
  return (
    <div className="containerlogin">
      <div className="div1login">
        <div className="div2login">
          <div className="welcomelogin">
          <div className="welcometextlogin">
            <div className="welcometextlogin1">Welcome back 👋</div>
            <div className="welcometextlogin2">Login to your speedxfix account <br />to continue</div>
          </div>
      </div>
        <div className="inputlogin">
      <div className="inputlogin1">
        <label>Email</label>
        <input type="email" placeholder="Enter your email"/>
      </div>
          <div className="inputlogin1">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"/>

            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
              </div>
        </div>
        <button type="submit" className="loginsignin-btn">
        Sign in
      </button>

        </div>
        <div className="buttonlogin">
           <div className="login-option">
            <div className="textoption">or</div>
            <button className="google-signin-btn">Continue with Google</button>
           </div>
           <div className="signup-option-text">Don't have an account? <a href="/sign up">Sign up</a></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;