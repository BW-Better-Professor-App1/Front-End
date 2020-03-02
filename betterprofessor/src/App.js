import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Register from './components/Register.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path="/register/">
        <Register />
      </Route>
      <Route exact path="/login/">
        <Login />
      </Route>
    </div>
  );
}

export default App;
