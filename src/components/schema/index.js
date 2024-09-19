import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email")
    .matches('regex@gmail.com', 'Email must be regex@gmail.com'),
    password: Yup.string()
    .min(6)
    .required("Please enter your password")
    .matches(/^V_.*@.*$/, 'Password must start with V_ and contain @'),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});