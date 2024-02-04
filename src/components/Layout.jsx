import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
  
  return (
    <main className="mx-auto w-full ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}