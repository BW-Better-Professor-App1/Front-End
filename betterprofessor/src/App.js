import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./utils/PrivateRoute";

import Reminders from "./pages/Reminders/Reminders";

function App() {
  return (
    <div className="App">
      <Route />
      <Route />
      <Route path="/reminders" component={Reminders} />
      <PrivateRoute />
    </div>
  );
}

export default App;
