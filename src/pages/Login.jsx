import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Login.css";

export default function AuthSlider() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    loginUsername: "",
    loginPassword: "",
    signupName: "",
    signupEmail: "",
    signupPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Login attempt with:", {
      username: formData.loginUsername,
      password: formData.loginPassword
    });
    navigate("/dashboard");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Signup attempt with:", {
      name: formData.signupName,
      email: formData.signupEmail,
      password: formData.signupPassword
    });
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      {/* Animated background */}
      <div className="background-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Main container */}
      <div className="auth-card">
        {/* Slider wrapper */}
        <div 
          className={`slider-wrapper ${isLogin ? "login-active" : "signup-active"}`}
        >
          {/* Login Panel */}
          <div className="auth-panel login-panel">
            <div className="form-section">
              <div className="form-header">
                <h2>Welcome Back</h2>
                <p>Sign in to continue your journey</p>
              </div>
              
              <form onSubmit={handleLogin} className="auth-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="loginUsername"
                    value={formData.loginUsername}
                    onChange={handleInputChange}
                    placeholder="Username or Email" 
                    required 
                  />
                  <span className="input-icon">👤</span>
                </div>
                
                <div className="input-group">
                  <input 
                    type="password" 
                    name="loginPassword"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                    placeholder="Password" 
                    required 
                  />
                  <span className="input-icon">🔒</span>
                </div>
                
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                <a href="/forgot-password" className="forgot-link">Forgot password?</a>
                </div>
                
                <button type="submit" className="auth-btn login-btn">
                  Sign In
                </button>
                
                <div className="divider">
                  <span>Or continue with</span>
                </div>
                
                <div className="social-auth">
                  <button type="button" className="social-btn google-btn">
                    <span className="social-icon">G</span>
                    Google
                  </button>
                  <button type="button" className="social-btn github-btn">
                    <span className="social-icon">Git</span>
                    GitHub
                  </button>
                </div>
              </form>
            </div>

            <div className="promo-section login-promo">
              <div className="promo-content">
                <div className="icon-wrapper">
                  <div className="promo-icon">🚀</div>
                </div>
                <h3>New to our platform?</h3>
                <p>Create an account and unlock all features</p>
                <button 
                  onClick={() => setIsLogin(false)}
                  className="switch-btn"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          {/* Signup Panel */}
          <div className="auth-panel signup-panel">
            <div className="promo-section signup-promo">
              <div className="promo-content">
                <div className="icon-wrapper">
                  <div className="promo-icon">👋</div>
                </div>
                <h3>Already have an account?</h3>
                <p>Sign in to access your dashboard</p>
                <button 
                  onClick={() => setIsLogin(true)}
                  className="switch-btn"
                >
                  Sign In
                </button>
              </div>
            </div>

            <div className="form-section">
              <div className="form-header">
                <h2>Create Account</h2>
                <p>Join us and start your journey</p>
              </div>
              
              <form onSubmit={handleSignup} className="auth-form">
                <div className="input-group">
                  <input 
                    type="text" 
                    name="signupName"
                    value={formData.signupName}
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    required 
                  />
                  <span className="input-icon">👤</span>
                </div>
                
                <div className="input-group">
                  <input 
                    type="email" 
                    name="signupEmail"
                    value={formData.signupEmail}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    required 
                  />
                  <span className="input-icon">✉️</span>
                </div>
                
                <div className="input-group">
                  <input 
                    type="password" 
                    name="signupPassword"
                    value={formData.signupPassword}
                    onChange={handleInputChange}
                    placeholder="Password" 
                    required 
                  />
                  <span className="input-icon">🔒</span>
                </div>
                
                <div className="form-options">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                   I agree to the <a href="/terms-and-conditions">Terms & Conditions</a>
                  </label>
                </div>
                
                <button type="submit" className="auth-btn signup-btn">
                  Create Account
                </button>
                
                <div className="divider">
                  <span>Or sign up with</span>
                </div>
                
                <div className="social-auth">
                  <button type="button" className="social-btn google-btn">
                    <span className="social-icon">G</span>
                    Google
                  </button>
                  <button type="button" className="social-btn github-btn">
                    <span className="social-icon">Git</span>
                    GitHub
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

