import React from "react";
import AuthComponents from "../components/auth-components";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AuthComponents type="signup" />
    </div>
  );
}
