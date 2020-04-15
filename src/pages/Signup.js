import React from "react";

function Signup() {
  return (
    <div className="signup">
      <h4>Sign up</h4>
      <form className="signup-form" id="signup-form">
        <label for="signup-email">Email Address</label>
        <br />
        <input className="input" type="email" id="signup-email" required />

        <br />
        <label for="signup-password">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="signup-password"
          required
        />

        <br />
        <button className="button">SIGNUP</button>
      </form>
    </div>
  );
}

export default Signup;
