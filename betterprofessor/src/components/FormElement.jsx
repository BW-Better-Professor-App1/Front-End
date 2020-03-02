import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

const FormElement = props => {
  const classes = useStyles();
  const { label, autoFocus, type } = props.inputData;

  return (
    <TextField 
      className={classes.root}
      variant="outlined"
      required={true}
      label={label}
      autoFocus={autoFocus}
      type={type}
    />
  );
};

export default FormElement;
