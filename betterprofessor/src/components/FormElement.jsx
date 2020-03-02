import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormElement = props => {
  const { label, autoFocus, type } = props.inputData;

  return (
    <TextField 
      variant="outlined"
      required={true}
      label={label}
      autoFocus={autoFocus}
      type={type}
    />
  );
};

export default FormElement;
