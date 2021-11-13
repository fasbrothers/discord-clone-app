import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.mcvuk.com/wp-content/uploads/discord-logo.jpg"
          alt="Logo Discord"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
