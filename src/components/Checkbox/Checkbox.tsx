import React from 'react'
import CheckboxElement, {CheckboxProps } from '@material-ui/core/Checkbox';



const Checkbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxElement {...props} />;
}

export default Checkbox
