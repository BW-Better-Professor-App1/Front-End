import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import PrivateRoute from "./utils/PrivateRoute";

import Login from "./pages/sign-in/Login";
import Register from "./pages/sign-up/Register";

import StudentsPage from "./pages/students/students.component";
import RemindersPage from "./pages/reminders/reminders.component";

import FunTitle from "./component/fun-title/fun-title.component";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    textAlign: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={`App ${classes.root}`}>
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