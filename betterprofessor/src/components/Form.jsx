import React from 'react';
import Button from '@material-ui/core/Button';

import FormElement from './FormElement.jsx';

const Form = props => {
  const { formData, buttonData } = props;
  const { text, variant, color } = buttonData;

  return (
    <form autoComplete="off">
      {formData.map(inputData => {
        return <FormElement inputData={inputData} key={inputData.label}/>;
      })}
      <Button variant={variant} color={color}>
        {text}
      </Button>
    </form>
  );
};

export default Form;
