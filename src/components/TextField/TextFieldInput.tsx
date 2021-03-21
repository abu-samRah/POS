import React from 'react'
import TextField,{TextFieldProps} from '@material-ui/core/TextField';



const TextFieldInput: React.FC<TextFieldProps> = (props) => {

  return <TextField {...props}  ></TextField>;
}


export default TextFieldInput
