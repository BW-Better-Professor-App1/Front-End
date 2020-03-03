import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form.jsx';

const Login = () => {
  const formName = 'Login';
  const formData = [
    {
      label: 'Email',
      autoFocus: true,
      type: 'email',
      helperText: 'Must be a valid email address',
    },
    {
      label: 'Password',
      autoFocus: false,
      type: 'password',
      helperText: 'Must be at least 6 characters',
    },
  ];
  const buttonData = {
    text: 'Login',
    variant: 'contained',
    color: 'primary',
  };

  return (
    <Fragment>
      <Form formName={formName} formData={formData} buttonData={buttonData} />
      <Link to="/register">
        Create an account
      </Link>
    </Fragment>
  );
};

export default Login;
