import {useContext, useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../../UserContext";
import {Link} from 'react-router-dom';
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import env from "react-dotenv";
import './PostPage.scss'


export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const [redirect,setRedirect] = useState(false);
  const [redirectHome,setRedirectHome] = useState(false);
  const {userInfo} = useContext(UserContext);
  const [navigate, setNavigate] = useState(false);
  const [coordinates, setCoordinates] = useState({lat:0, lng:0});
  const {id} = useParams();

  useEffect(() => {
    fetch(env.URL_API + `/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
          console.log(postInfo);
          console.log(userInfo); 

        });
      });
  }, []);



  if (!postInfo) return '';

  async function handleBuyButton(e) {
    e.preventDefault();
    console.log("postInfo: ", postInfo);

    const response = await fetch(env.URL_API + `/buy`,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',  
      body: JSON.stringify(postInfo),
      credentials: 'include'
      });
      const content = await response.json();
      console.log("res", content);
      setRedirect(true);
  };

  async function handleDelete() {
    const response = await fetch(env.URL_API + '/post/'+id, {
      method: 'DELETE',
      credentials: 'include',
    }).then(()=> setRedirectHome(true));
    
  }

  function handleNavigate(e) {
    e.preventDefault();
    const address = postInfo.summary;
    fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&polygon=1&addressdetails=1`)
    .then(results => results.json())
    .then(data => {
      console.log(+data[0].lat);
      setCoordinates({lat:+data[0].lat , lng: +data[0].lon});
      setNavigate(!navigate);
    })
  }

  if (redirect) {
    return <Navigate to={'/my-orders'} />
  }
  if (redirectHome) {
    return <Navigate to={'/'} />
  }


  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <div className="image">
        <img src={env.URL_API + `/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>

      <div className='post-page__buttons'>
      {
        userInfo.id === postInfo.author._id && (
          <>
          <div className="post-page__btn edit">
            <Link  to={`/edit/${postInfo._id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </Link>
            
          </div>
          <button className="post-page__btn remove"  onClick={handleDelete}>Kasuj</button>
          </>
          )
          
      }
      <button className="post-page__btn nav" onClick={handleNavigate}></button>
      
      {
        ((userInfo?.id !== postInfo?.author._id) && (Object.keys(userInfo).length > 0)) && (
        <button className="buy-btn " onClick={handleBuyButton}>Kup</button>)
      }
      </div>

      {navigate && <GoogleMaps coordinates={coordinates} />}
      
    </div>
  );
}