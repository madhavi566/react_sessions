import { useFormik } from 'formik';

const SignInForm = () => {

    const signIn = useFormik({
        initialValues: {
            email : '',
            password  : ''
        },
        onSubmit :values => {
            alert(JSON.stringify(values));
        }
    })

    return (
<form onSubmit = {signIn.handleSubmit }>
        <label htmlFor='email'>Email</label>
        <input type="email" id="email"
         name="email" onChange = {signIn.handleChange} 
        value = {signIn.values.email}   />
   <label htmlFor='password'>password</label>
        <input type="password" id="password"
         name="password" onChange = {signIn.handleChange} 
        value = {signIn.values.password}   />
<button type="submit">Submit</button>
</form>

        )
}

export default SignInForm;