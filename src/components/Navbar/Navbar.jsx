import React from "react";

import { Link } from "react-router-dom";
//import './Navbar.scss'
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";

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
  <div className="flex w-[1500px] h-[701px] relative bg-white ">
      <img
        className="w-[1500px] h-[701px] left-[0px] top-0 absolute "
        src="Hero.png"
      />
      <div className="w-[1202px] h-[569px] left-[120px] top-0 absolute flex-col justify-between items-center inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="p-2.5 justify-center items-center flex">
            <img className=" w-[50px] h-[50px] left-[1px] " src="logo.svg" />
            <div className="text-stone-50 text-4xl font-bold font-oswald">
              Wyrzuta
            </div>
          </div>
          <div className="justify-start items-center gap-[33px] flex">
            <div className="text-white text-xl font-extrabold font-oswald">
              Start
            </div>
            <div className="text-white text-xl font-extrabold font-oswald">
              O co chodzi
            </div>
            <div className="text-white text-xl font-extrabold font-oswald">
              O nas
            </div>
            <div className="text-white text-xl font-extrabold font-oswald">
              Kontakt
            </div>
          </div>
          <div className="justify-start items-start flex">
            <button className="py-[12px] px-[24px] justify-center items-center gap-2 flex text-white text-xl font-bold font-oswald hover:bg-green-400 hover:opacity-60 hover:text-black">
              Login
            </button>
            <button className="py-[12px] px-[24px] bg-green-400 justify-center items-center gap-2 flex hover:opacity-60 text-white text-xl font-bold font-oswald hover:text-black">
              Register
            </button>
          </div>
        </div>
        <div className="self-stretch h-[376px] flex-col justify-between items-center flex">
          <div className="w-[1198px] h-[266px] text-center">
            <span className="text-white text-[80px] font-bold font-oswald uppercase leading-[112px]">
              nie wyrzucaj{" "}
            </span>
            <span className="text-green-400 text-[80px] font-bold font-oswald uppercase leading-[112px] ">
              oddaj
            </span>
            <span className="text-white text-[80px] font-bold font-oswald uppercase leading-[112px] ">
              {" "}
              <br />
            </span>

            <span className="text-green-400 text-[80px] font-bold font-oswald uppercase leading-[112px] ">
              {" "}
              niechciane rzeczy{" "}
            </span>
          </div>
          <button className="py-[12px] px-[24px] bg-green-400 justify-center items-center gap-2 inline-flex text-white text-xl font-bold font-oswald  hover:opacity-60 hover:text-black">
            
              Więcej
            
          </button>
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
