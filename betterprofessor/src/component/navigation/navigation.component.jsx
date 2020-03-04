import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const handleSignout = () => {
    localStorage.clear();
  };

  return (
    <header className="header">
      <Link to="/students">Dashboard</Link>
      <Link to="/reminders">Reminder</Link>
      <Link to="/" onClick={handleSignout}>
        Sign out
      </Link>
    </header>
  );
}

export default Navigation;
