import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form.jsx';

const Register = () => {
  const formData = [
    {
      label: 'First Name',
      autoFocus: true,
      type: 'string',
    },
    {
      label: 'Last Name',
      autoFocus: false,
      type: 'string',
    },
    {
      label: 'Email',
      autoFocus: false,
      type: 'email',
    },
    {
      label: 'Password',
      autoFocus: false,
      type: 'password',
    },
  ];

  const buttonData = {
    text: 'Register',
    variant: 'contained',
    color: 'primary',
  };

  return (
    <Fragment>
      <Form formData={formData} buttonData={buttonData} />
      <Link to="/login">
        Already have an account?
      </Link>
    </Fragment>
  );
};

export default Register;
