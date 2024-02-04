import { useState } from "react";
import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import env from "react-dotenv";
import './Post.scss'

export default function Post({_id,title,summary,cover,content,createdAt,author,remove}) {

  const [redirect,setRedirect] = useState(false);

  const handleRemove = async () => {
    console.log("remove");
    const response = await fetch(env.URL_API + '/cancel', {
        method: 'PUT',
        body: {_id:_id,author},
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
    <div className="post hover:opacity-40">
      <div className="image">
        <Link to={`/post/${_id}`}>
          <img src={env.URL_API + '/'+cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="summary">{summary}</p>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        
        {
          remove && <button className="remove-btn" onClick={handleRemove}>Rezygnuj</button>
        }
      </div>
    </div>
  );
}