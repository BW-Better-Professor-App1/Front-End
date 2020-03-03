import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./utils/PrivateRoute";

import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

import StudentsPage from "./pages/students/students.component";
import RemindersPage from "./pages/reminders/reminders.component";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignIn} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <PrivateRoute path="/reminders" component={RemindersPage} />
      <PrivateRoute path="/students" component={StudentsPage} />
    </div>
  );
}

export default App;
