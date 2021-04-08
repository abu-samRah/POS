import * as Yup from 'yup';
const Password_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email(`Email should be valid`)
        .required(`Email is required`),
    password: Yup.string()
        .min(4)
        .matches(
            Password_REGEX,
            'Password should contain both numbers and characters'
        )
        .required(`Password is Required`),
});

export default validationSchema;
