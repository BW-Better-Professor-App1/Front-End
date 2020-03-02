import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./utils/PrivateRoute";

import Reminders from "./pages/reminders/Reminders";
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

function App() {
  return (
    <div className="App">
      {/* <Route />
      <Route />
      <Route path="/reminders" component={Reminders} />
      <PrivateRoute /> */}
      {/* <SignInAndSignUpPage /> */}
      {/* <Reminders /> */}
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/protected" component={Reminders} />
      <Route exact path="/" component={SignIn} />
    </div>
  );
}

export default App;
