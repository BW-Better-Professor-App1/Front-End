import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form.jsx';

const Register = () => {
  const formName = 'Register';
  const formData = [
    {
      label: 'First Name',
      autoFocus: true,
      type: 'string',
      helperText: 'May only contain characters A-Z',
    },
    {
      label: 'Last Name',
      autoFocus: false,
      type: 'string',
      helperText: 'May only contain characters A-Z',
    },
    {
      label: 'Email',
      autoFocus: false,
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
    text: 'Register',
    variant: 'contained',
    color: 'primary',
  };

  return (
    <Fragment>
      <Form formName={formName} formData={formData} buttonData={buttonData} />
      <Link to="/login">
        Already have an account?
      </Link>
    </Fragment>
  );
};

export default Register;
