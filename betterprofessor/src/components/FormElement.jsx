import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

const FormElement = props => {
  const classes = useStyles();
  const { label, autoFocus, type, helperText } = props.inputData;
  const [inputState, setInputState] = useState('');
  const [errorState, setErrorState] = useState(false);

  const handleChanges = event => {
    setInputState(event.target.value);
    const isValid = validateInput();
    if (isValid && errorState) {
      setErrorState(false);
    } else if (!isValid && !errorState) {
      setErrorState(true);
    }
  };

  const validateInput = () => {
    const stringRegEx = '^[a-zA-Z]+$';
    const emailRegEx = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
    switch(type) {
      case 'string':
        return (inputState.length > 0 ? inputState.match(stringRegEx) : true);
      case 'email':
        return (inputState.match(emailRegEx));
      case 'password':
        return (inputState.length > 5);
      default:
        return true;
    }
  };

  return (
    <TextField 
      className={classes.root}
      variant="outlined"
      required={true}
      label={label}
      autoFocus={autoFocus}
      type={type}
      value={inputState}
      error={errorState}
      helperText={errorState ? helperText : ''}
      onChange={handleChanges}
    />
  );
};

export default FormElement;
