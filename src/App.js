
import {Route, Routes} from "react-router-dom";
import {UserContextProvider} from "./UserContext";
import Layout from './components/Layout';
import IndexPage from './components/IndexPage/IndexPage';
import Info from './components/Info/Info';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import CreatePost from './components/CreatePost/CreatePost';
import HowTo from './components/HowTo/HowTo';
import EditPost from './components/EditPost/EditPost';
import PostPage from './components/PostPage/PostPage';
import MyOrder from './components/MyOrder/MyOrder';
import { GoogleApiWrapper } from 'google-maps-react';





function App() {
  return (

    
      <div className="flex w-[100%] bg-black">
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/how-to" element={<HowTo />} />
              <Route path="/post/:id" element={<PostPage />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/give" element={<CreatePost />} />
              <Route path="/info" element={<Info />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-orders" element={<MyOrder />} />
              <Route path="/map" element={<GoogleApiWrapper />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </div>
   
  );
}

export default App;