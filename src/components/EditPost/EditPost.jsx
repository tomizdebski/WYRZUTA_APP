import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Editor from "../Editor/Editor";
import env from "react-dotenv";
import './EditPost.scss'

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${env.URL_API}/post/`+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);

  async function updatePost(ev) {
    ev.preventDefault();
      if(title && summary && content && files) {
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('content', content);
      data.set('id', id);
      if (files?.[0]) {
        data.set('file', files?.[0]);
      }
      const response = await fetch(`${env.URL_API}/post`, {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        setRedirect(true);
      }
    } else setError(true);
  }

  

  if (redirect) {
    return <Navigate to={'/post/'+id} />
  }

  return (

    <>
      <form className="form-edit" onSubmit={updatePost}>
        <input className="form-edit__item" type="title"
              placeholder={'Title'}
              value={title}
              onChange={ev => setTitle(ev.target.value)} />
        <input className="form-edit__item" type="summary"
              placeholder={'Summary'}
              value={summary}
              onChange={ev => setSummary(ev.target.value)} />
        <input className="form-edit__item" type="file"
              onChange={ev => setFiles(ev.target.files)} />
        <Editor onChange={setContent} value={content} />
        {error ? (<div style={{color: 'red'}} className="login__label">Pola muszą być wypełnione</div>) : null}
        <button type="submit" className="form-edit__item" style={{marginTop:'5px'}} >Edycja</button>
      </form>
      
      
  </>
  );
}