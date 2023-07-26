import Post from "../Post/Post";
import {useEffect, useState} from "react";
import env from "react-dotenv";
import './MyOrder.scss'

export default function MyOrder() {

    const [posts,setPosts] = useState([]);

    console.log(posts);
    useEffect(() => {
        fetch(env.URL_API + '/my-orders', {credentials: 'include'}).then(response => { // do config.js
        response.json().then(posts => {
            setPosts(posts);
        });
        });
    }, []);




    return (
        <>
            <h1>Koszyk</h1>
            <div className="container-post">
                {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post} remove={true}/>
                ))}
            </div>
        </>
        

    )
}