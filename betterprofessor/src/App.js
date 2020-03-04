import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";

import Login from "./pages/sign-in/Login";
import Register from "./pages/sign-up/Register";

import StudentsPage from "./pages/students/students.component";
import RemindersPage from "./pages/reminders/reminders.component";

import FunTitle from "./component/fun-title/fun-title.component";

function App() {
  return (
    <div className="App">
      <FunTitle />
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <PrivateRoute path="/reminders" component={RemindersPage} />
      <PrivateRoute path="/students" component={StudentsPage} />
    </div>
  );
}

export default App;