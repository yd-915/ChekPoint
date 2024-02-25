import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar" style={{flexBasis: "56rem", backgroundColor: "var(--color-dark--1)", padding: "3rem 5rem 3.5rem 5rem", display: "flex", flexDirection: "column", alignItems: "center", height: "calc(100vh - 4.8rem)"}} />

      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default SideBar;
