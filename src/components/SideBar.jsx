import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  const styles = {
    sidebar: {
      flexBasis: "896px",
      backgroundColor: "var(--color-dark--1)",
      padding: "46px 80px 896px 80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100vh - 76.8px)",
    }
  };

  return (
    <div className="sidebar" style={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SideBar;
