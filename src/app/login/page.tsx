import React from 'react'
import "./Login.css"
export default function Login() {
  return (
    <>
      <div className="container-box">
        <div className="heading">Sign In</div>
        <form className="form" action="">

          <input
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            className="input"
            required
          />

          <input
            placeholder="E-mail"
            id="email"
            name="email"
            type="email"
            className="input"
            required
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            className="input"
            required
          />
          <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
          <input value="Sign In" type="submit" className="login-button" />
        </form>
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button google">
              <svg
                viewBox="0 0 488 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
              >
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
            </button>
            <span className="social-button-name">Google</span>
          </div>
        </div>
      </div>
    </>
  )
}
