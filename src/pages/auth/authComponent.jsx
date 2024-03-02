import React from "react";
import { Button } from "antd";
import useAuthComponentHook from "./hooks/useAuthComponentHook";

const AuthComponent = () => {
  const { handleSignInWithGoogle } = useAuthComponentHook();
  return (
    <div className="login-page">
      <p>
        {" "}
        Sign in to use expense tracker{" "}
        <Button className="login-page-btn" onClick={handleSignInWithGoogle}>
          {" "}
          Sign in{" "}
        </Button>
      </p>
    </div>
  );
};

export default AuthComponent;
