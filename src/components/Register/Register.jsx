import React, {useState} from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import {Navigate} from "react-router-dom";
import env from "react-dotenv";
import './Register.scss'


const SignupSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
    password: Yup.string().min(8, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
    email: Yup.string().email('Błędny email').required('Pole wymagane'),
    street: Yup.string().min(3, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
    city: Yup.string().min(2, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
    zip: Yup.string().matches(/[0-9]{2}-[0-9]{3}/ , 'To nie jest format kodu').required('Pole wymagane'),
  });
 
  const Register = () => {

    const [redirect,setRedirect] = useState(false);



    if (redirect) {
      return <Navigate to={'/'} />
    }

    return (
                <div className="register">
                <h1  >Rejestracja</h1>
                <Formik
                    initialValues={{
                    username: '',
                    password: '',
                    email: '',
                    street: '',
                    city: '',
                    zip: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                    console.log(values);
                    const response = await fetch('https://wyrzuta.onrender.com/register', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {'Content-Type':'application/json'},
                  });
       
                  if (response.status === 200) {
                    alert('rejestracja udana');
                    setRedirect(true);
                  } else {
                    alert(`rejestracja nieudana `);
                   
                  }


                    }}>

                    {({ errors, touched }) => (
                    <Form>
                        <Field name="username" placeholder="nazwa użytkownika" className="register__item"/>
                        {errors.username && touched.username ? (
                        <div style={{color: 'red'}} className="register__label">{errors.username}</div>
                        ) : null}
                        <Field name="password" type="password" placeholder="hasło" className="register__item"/>
                        {errors.password && touched.password ? (
                        <div style={{color: 'red'}} className="register__label">{errors.password}</div>
                        ) : null}
                        <Field name="email" placeholder="email" className="register__item"/>
                        {errors.email && touched.email ? (
                        <div style={{color: 'red'}} className="register__label">{errors.email}</div>
                        ) : null}
                        <Field name="street" placeholder="ulica" className="register__item"/>
                        {errors.street && touched.street ? (
                        <div style={{color: 'red'}} className="register__label">{errors.street}</div>
                        ) : null}
                        <Field name="city" placeholder="miasto" className="register__item"/>
                        {errors.city && touched.city ? (
                        <div style={{color: 'red'}} className="register__label">{errors.city}</div>
                        ) : null}
                        <Field name="zip"  placeholder="kod pocztowy" className="register__item"/>
                        {errors.zip && touched.zip ? (
                        <div style={{color: 'red'}} className="register__label">{errors.zip}</div>
                        ) : null}
                        
                        <button className="register__item" type="submit" >Zatwierdź</button>
                    </Form>
                    )}
                </Formik>
                </div>
            );
    }

  export default Register;