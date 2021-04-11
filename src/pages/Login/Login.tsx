import React from 'react';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { Box, FormHelperText, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import TextFieldInput from '../../components/TextField/TextFieldInput';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import validationSchema from './validationSchema';

const useStyles = makeStyles((theme) => {
    return {
        errerMsg: {
            color: 'red',
        },
    };
});

interface ILoginForm {
    email: string;
    password: string;
    submit: string | null;
}

const LoginForm = () => {
    const classes = useStyles();
    const [shouldRememberUser, setShouldRememberUser] = React.useState(
        () => window.localStorage.getItem('rememberMe') === 'true' || false
    );
    const [errorMsg, setErrorMsg] = React.useState(false);
    let history = useHistory();
    const { user, signin } = useAuth();

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setShouldRememberUser(event.target.checked);
    };

    const handleSubmit = (
        values: ILoginForm,
        { setErrors, setStatus, setSubmitting }: FormikHelpers<ILoginForm>
    ) => {
        try {
            if (shouldRememberUser) {
                localStorage.setItem('email', values.email);
                localStorage.setItem('rememberMe', String(shouldRememberUser));
            } else {
                localStorage.clear();
            }

            signin(values.email, values.password, (isAuthenticated) => {
                if (isAuthenticated) {
                    //redirect the user to the main page
                    history.push('/app');
                } else {
                    setErrorMsg(true);
                    setSubmitting(false);
                }
            });
        } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
        }
    };

    return (
        <Formik<ILoginForm>
            initialValues={{
                email: localStorage.getItem('email') || '',
                password: 'iamcool1',
                submit: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
                <form noValidate onSubmit={handleSubmit}>
                    {errorMsg && (
                        <p className={classes.errerMsg}>
                            *Error invalid user name or password
                        </p>
                    )}
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
                                checked={shouldRememberUser}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                        }
                        label="Remember me?"
                    />
                    {errors.submit && (
                        <Box mt={3}>
                            <FormHelperText error>
                                {errors.submit}
                            </FormHelperText>
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
