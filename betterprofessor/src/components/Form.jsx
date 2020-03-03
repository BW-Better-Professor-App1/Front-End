import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import FormElement from './FormElement.jsx';

const useStyles = makeStyles({
  root: {
    margin: '100px auto 20px',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #CBCBCB',
    borderRadius: '5px',
  },
  button: {
    margin: '0 auto',
    width: '100px',
  },
  label: {
    position: 'fixed',
    color: '#CBCBCB',
    fontSize: '12px',
    padding: '0 5px',
    backgroundColor: '#FFF',
    transform: 'translate(-160px, -7px)',
  },
});

const Form = props => {
  const classes = useStyles();
  const { formName, formData, buttonData } = props;
  const { text, variant, color } = buttonData;

  return (
    <Fragment>
      <span className={classes.label}>{formName}</span>
      <form className={classes.root}>
        {formData.map(inputData => {
          return <FormElement inputData={inputData} key={inputData.label}/>;
        })}
        <Button className={classes.button} variant={variant} color={color}>
          {text}
        </Button>
      </form>
    </Fragment>
  );
};

export default Form;
