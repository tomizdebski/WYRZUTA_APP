import Post from "../Post/Post";
import env from "react-dotenv";
import './IndexPage.scss'


import {useEffect, useState} from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(posts);
  useEffect(() => {
    fetch(`${env.URL_API}/post`).then(response => { // do config.js
      response.json().then(posts => {
        setPosts(posts);
        setLoading(false);
      }).catch(err => console.log("pusty wynik"));
    });
  }, []);

  if(loading) return <LoadingSpinner />;

  return (
    <>
        
        
     
      <div className="container-post bg-white py-20 ">
         {posts.length > 0 && posts.map(post => (
        !post.buyer && <Post key={post._id} {...post} />
        ))}
      </div>
      
     
    </>
  );
}