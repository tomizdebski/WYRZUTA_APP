import React from "react";

import { Link } from "react-router-dom";
//import './Navbar.scss'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import Hamburger from "../Hamburger";

function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="flex w-full h-[510px] relative bg-white ">
      <img
        className="w-full left-[0px] top-0 absolute h-[510px] "
        src="Hero.png"
      />
      <div className="w-full absolute top-0 left-0 flex items center ">
      <div className="w-full flex-col justify-between items-center inline-flex">
        <div className="self-stretch justify-between items-center inline-flex px-2">
          <Link className="p-2.5 justify-center items-center flex " to="/" >
            <img className=" w-[50px] h-[50px] left-[1px] " src="logo.svg" />
            <div className="text-stone-50 text-4xl font-bold font-oswald">
              Wyrzuta
            </div>
          </Link>
          <div className="hidden justify-start items-center gap-[20px] lg:flex">
            <Link
              className="text-white text-xl font-bold font-oswald hover:border-b-4 hover:border-green-400"
              to="/"
            >
              Start
            </Link>
            <Link
              className="text-white text-xl font-bold font-oswald hover:border-b-4 hover:border-green-400"
              to="/how-to"
            >
              O co chodzi
            </Link>
            <Link
              className="text-white text-xl font-bold font-oswald hover:border-b-4 hover:border-green-400"
              to="/info"
            >
              O nas
            </Link>
            <Link
              className="text-white text-xl font-bold font-oswald hover:border-b-4 hover:border-green-400"
              to="/contact"
            >
              Kontakt
            </Link>
            {username && (
              <>
                <Link className="text-white text-xl font-bold font-oswald hover:border-b-4 hover:border-green-400">
                  Koszyk
                </Link>
              </>
            )}
          </div>
          <div className="justify-start items-start flex">
            

            {username && (
              <>
                <span>
                  <Link className="py-[12px] px-[24px] justify-center items-center gap-2 flex text-white text-xl font-bold font-oswald   hover:bg-green-400 hover:border hover:border-green-400 hover:opacity-60 hover:text-black" to="/" onClick={logout}>
                    Wyloguj ({username})
                  </Link>
                </span>
                <span className="give">
                  <Link className="py-[12px] px-[24px] justify-center items-center gap-2 flex border  border-green-400 text-white text-xl font-bold font-oswald hover:bg-green-400 hover:opacity-60 hover:text-black" to="/give">
                    Oddaj
                  </Link>
                </span>
              </>
            )}

            {!username && (
              <Link className="sm:flex mx-2 py-[12px] px-[24px] justify-center items-center gap-2 flex text-white text-xl font-bold font-oswald border border-green-400 hover:bg-green-400 hover:opacity-60 hover:text-black hidden" to="/login">
                Login
              </Link>
            )}
            {!username && (
              <Link className="sm:flex py-[12px] px-[24px] bg-green-400 border border-green-400 justify-center items-center gap-2  hover:opacity-60 text-white text-xl font-bold font-oswald hover:text-black hidden" to="/register">
                Register
              </Link>
            )}
            <Hamburger />
          </div>
        </div>
        <div className=" h-[376px] flex-col justify-end gap-3 items-left flex">
          <div className="md:text-left text-center">
            <span className="text-white text-[40px] lg:text-[60px] font-extrabold font-oswald  ">
              Nie wyrzucaj{" "}
            </span>
            <span className="text-green-400 text-[40px] lg:text-[60px] font-extrabold font-oswald ">
              oddaj
            </span>
            <span className="text-white text-[40px] lg:text-[60px] font-extrabold font-oswald uppercase ">
              
              <br />
            </span>

            <span className="text-white text-[40px] lg:text-[60px] font-extrabold font-oswald  ">
              
              niechciane rzeczy{" "}
            </span>
            
          </div>
          <Link className="py-[12px] px-[24px] bg-green-400  w-[120px] justify-center items-center  inline-flex text-white text-xl font-bold font-oswald  hover:opacity-60 hover:text-black">
            Więcej
          </Link>
        </div>
      </div>
      </div>

    </div>
  );
}

export default Navbar;

// const old = (
//   <div className="navbar">
//     <div className="flex items-center justify-around">
//       <Link className="flex w-20" to="/">
//         <img src={Logo} alt="logo" />
//         <h1>wyrzuta.pl</h1>
//       </Link>
//       <div className="flex gap-3">
//         <Link className="link" to="/">
//           <h6>Start</h6>
//         </Link>
//         <Link className="link" to="/how-to">
//           <h6>O co chodzi</h6>
//         </Link>
//         <Link className="link" to="/info">
//           <h6>O nas</h6>
//         </Link>
//         <Link className="link" to="/contact">
//           <h6>Kontakt</h6>
//         </Link>

//         {username && (
//           <>
//             <Link className="link" to="/my-orders">
//               <h6>Koszyk</h6>
//             </Link>
//           </>
//         )}

//         {username && (
//           <>
//             <span>
//               <Link className="link" to="/" onClick={logout}>
//                 Wyloguj ({username})
//               </Link>
//             </span>
//             <span className="give">
//               <Link className="link" to="/give">
//                 Oddaj
//               </Link>
//             </span>
//           </>
//         )}

//         {!username && (
//           <Link className="link" to="/login">
//             <h6>Login</h6>
//           </Link>
//         )}
//         {!username && (
//           <Link className="link" to="/register">
//             <h6>Register</h6>
//           </Link>
//         )}
//       </div>
//     </div>
//   </div>
// );
