import React from 'react'
import Logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
//import './Navbar.scss'
import {useContext, useEffect, useState} from "react";
import { UserContext } from '../../UserContext';



function Navbar() {

  const {setUserInfo,userInfo} = useContext(UserContext);


  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }


  const username = userInfo?.username;

  return (
    <div className='navbar'>
      <div className="flex items-center justify-around">
        <Link className="flex w-20" to="/" >
          <img src={Logo} alt="logo" />
          <h1>wyrzuta.pl</h1>
        </Link>
        <div className="flex gap-3">
          <Link className='link' to="/">
            <h6>Start</h6>
          </Link>
          <Link className='link' to="/how-to">
            <h6>O co chodzi</h6>
          </Link>
          <Link className='link' to="/info">
            
            <h6>O nas</h6>
          </Link>
          <Link className='link' to="/contact">
            <h6>Kontakt</h6>
          </Link>
          
          {
            username && (
              <>
                <Link className='link' to="/my-orders">
                  <h6>Koszyk</h6>
                </Link>
              </>
            )
          }
          
          
          
          {username && (
            <>
              <span>
                  <Link className="link" to="/" onClick={logout}>Wyloguj ({username})</Link>
              </span>
              <span className="give">
                <Link className="link" to="/give">Oddaj</Link>
              </span>
            </>
          )}

          {!username && <Link className="link" to="/login"><h6>Login</h6></Link>}
          {!username && <Link className="link" to="/register"><h6>Register</h6></Link>}
  
           
        </div>
        
      </div>
     
      </div>
  )
}

export default Navbar