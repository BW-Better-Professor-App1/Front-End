import React from "react";
import { Redirect } from "react-router-dom";

const SignOut = () => {
  localStorage.clear();

  return <Redirect to="/" />;
};

export default SignOut;
