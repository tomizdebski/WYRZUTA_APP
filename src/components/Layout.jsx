import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

export default function Layout() {
  
  return (
    <main className="flex flex-col align-center ">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}