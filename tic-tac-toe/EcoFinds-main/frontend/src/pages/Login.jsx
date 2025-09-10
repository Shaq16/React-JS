import React from "react";
import AuthComponents from "../components/auth-components";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthComponents type="login" />
    </div>
  );
}
