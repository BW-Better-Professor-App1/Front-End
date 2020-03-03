import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./utils/PrivateRoute";

import Reminders from "./pages/reminders/reminders.component";
// import StudentPage from "./pages/students-page/students-page.component";
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

import StudentsPage from "../src/component/students/students.component";

// import AddStudent from "./component/add-student/add-student.component";

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/students" component={StudentsPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/protected" component={Reminders} />
      <Route exact path="/" component={SignIn} />
    </div>
  );
}

export default App;
