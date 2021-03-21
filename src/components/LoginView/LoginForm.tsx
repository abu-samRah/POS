import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  FormHelperText,
  FormControlLabel,
} from '@material-ui/core';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import login from '../../hooks/logIn';
import TextFieldInput from '../TextField/TextFieldInput';
import Button from '../Button/Button'
import Checkbox from '../Checkbox/Checkbox'

const Password_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
const LoginForm = () => {
  const isMountedRef = useIsMountedRef();
  const [checked, setChecked] = React.useState(
    () => window.localStorage.getItem('rememberMe') === 'true' || false
  );
  const handleCheckboxChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Formik
      initialValues={{
        email: localStorage.getItem('email') || '',
        password: 'iamcool1',
        submit: null,
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email(`Email should be valid`)
          .required(`Email is required`),
        password: Yup.string()
            .min(4)
            .matches(Password_REGEX, "Password should contain both numbers and characters")
            .required(`Password is Required`),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          if (checked) {
            localStorage.setItem('email', values.email);
            localStorage.setItem('rememberMe', String(checked));
          } else {
            localStorage.clear();
          }
            const result = await login(values.email, values.password);
            if (result.found) {
                //redirect the user to the main page
            }
                
          if (isMountedRef.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          if (isMountedRef.current) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
        >
          <TextFieldInput
            error={Boolean(touched.email && errors.email)}
            fullWidth
            autoFocus
            helperText={touched.email && errors.email}
            label="Email"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextFieldInput
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Passsword"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange}
                color="primary"
                
              />
            }
            label="Remember me?"
          />
          {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )}
          <Box mt={2}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              LogIn
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};



export default LoginForm;
