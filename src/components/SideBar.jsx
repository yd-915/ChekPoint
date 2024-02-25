import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import "./SideBar.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default SideBar;
