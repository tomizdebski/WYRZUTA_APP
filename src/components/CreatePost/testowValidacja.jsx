import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState, useContext, useEffect} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../../Editor";
import {UserContext} from "../../UserContext";
import * as Yup from 'yup';
import { Formik, Field, Form } from "formik";
import "./CreatePost.scss"

const addPostSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
  summary: Yup.string().min(8, 'Za krótki!').max(50, 'Za długi!').required('Pole wymagane'),
  //content: Yup.string().min(8, 'Za krótki!').max(500, 'Za długi!'),
  file: Yup.mixed().required('Pole wymagane'),
});

export default function CreatePost() {

  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {userInfo} = useContext(UserContext);

  if (!Object.keys(userInfo).length > 0) return <Navigate to={'/login'} />;


  async function createNewPost(ev) {
    ev.preventDefault();    
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (


    <div  >
                <h1>Dodawanie ogłoszenia</h1>
                <Formik
                    initialValues={{
                    title: '',
                    summary: '',
                    file:'',
                    }}
                    validationSchema={addPostSchema}
                    onSubmit={async (values) => {
                    console.log(values);
                    const data = {...values, content};
                    console.log(data);
                    const response = await fetch('http://localhost:4000/post', {
                      method: 'POST',
                      body: data,
                      credentials: 'include',
                    });
                    if (response.ok) {
                      setRedirect(true);
                    }



                    
                    }}>
                      {({ errors, touched }) => (
                      <Form className="form-add" >
                          <Field name="title" placeholder="Tytuł" className="form-add__item"/>
                          {errors.title && touched.title ? (
                          <div style={{color: 'red'}} className="form-add_label">{errors.title}</div>
                          ) : null}
                          <Field name="summary" placeholder="Miasto ulica nr" className="form-add__item"/>
                          {errors.summary && touched.summary ? (
                          <div style={{color: 'red'}} className="form-add__label">{errors.summary}</div>
                          ) : null}
                          <Field name="file" type="file" className="form-add__item" />
                          {errors.file && touched.file ? (
                          <div style={{color: 'red'}} className="form-add__label">{errors.file}</div>
                          ) : null}
                          <Editor className="form-add__editor" value={content} onChange={setContent} />
                          
                          <button className="form-add__item" type="submit" >Zatwierdź</button>
                      </Form>
                    )} 
                </Formik>

              </div>

    // <form className="form-add" onSubmit={createNewPost}>
    //   <input className="form-add__item" type="title"
    //          placeholder={'Tytuł'}
    //          value={title}
    //          onChange={ev => setTitle(ev.target.value)} />
    //   <input className="form-add__item" type="summary"
    //          placeholder={'Lokalizacja : miasto , ulica , nr'}
    //          value={summary}
    //          onChange={ev => setSummary(ev.target.value)} />
    //   <input className="form-add__item file" type="file"
    //          onChange={ev => setFiles(ev.target.files)} />
    //   <Editor className="form-add__editor" value={content} onChange={setContent} />
    //   <button className="form-add__item"style={{marginTop:'5px'}}>Create post</button>
    // </form>
  );
}