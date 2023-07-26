import './Contact.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../UserContext';
import {Navigate} from "react-router-dom";
//import nodemailer = require("nodemailer");
import * as Yup from 'yup';
import { Formik, Field, Form } from "formik";


const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
  surname: Yup.string().min(3, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
  message: Yup.string().min(3, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
});

export default function Contact(){

    const {setUserInfo,userInfo} = useContext(UserContext);
    const [redirect,setRedirect] = useState(false);
    const [messageSend, setMessageSend] = useState('');


    // const [from, setFrom] = useState('');
    // const [password, setPassword] = useState('');

    // const transport = nodemailer.createTransport({
    //     jsonTransport: true
    // });

    // let mailOptions = {
    //     from: 'test@example',
    //     to: "foo@example.com",
    //     subject: "Hello World",
    //     text: "Hello world?",
    //     html: "<b>Hello world?</b>",
    // };

    // transport.sendMail(mailOptions).then((result)=>{
    //     //obsługa sukcesu
    // }).catch((error)=>{
    //     //obsługa błędu
    // })
    const username = userInfo?.username;

    if (!username) return <Navigate to={'/login'} />;
    if (redirect) return <Navigate to={'/'} />;
      
    
    return(
         
                <div  >
                <h1>Kontakt</h1>
                <Formik
                    initialValues={{
                    name: '',
                    surname: '',
                    message: '',
                    }}
                    validationSchema={contactSchema}
                    onSubmit={async (values) => {
                    alert(JSON.stringify(values));
                    const messageSend = `mailto:tomizdebski@gmail.com?subject='Info ${values.name} ${values.surname}'&body='${values.message}'`
                    setMessageSend(messageSend);

                    
                    }}>
                    {({ errors, touched }) => (
                    <Form className="contact">
                        <Field name="name" placeholder="imię" className="contact__item"/>
                        {errors.name && touched.name ? (
                        <div style={{color: 'red'}} className="contact_label">{errors.name}</div>
                        ) : null}
                        <Field name="surname" type="text" placeholder="nazwisko" className="contact__item"/>
                        {errors.surname && touched.surname ? (
                        <div style={{color: 'red'}} className="contact__label">{errors.surname}</div>
                        ) : null}
                        <Field name="message" type="text"  placeholder="message" className="contact__item"/>
                        {errors.message && touched.message ? (
                        <div style={{color: 'red'}} className="contact__label">{errors.message}</div>
                        ) : null}
                        <button className="contact__item" type="submit" >
                        <a href={messageSend}>Wyślij</a>
                        </button>
                    </Form>
                    )} 
                </Formik>
                </div>
        
    )
}