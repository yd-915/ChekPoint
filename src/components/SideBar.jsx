import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  const styles = {
   sidebar: {
  flexBasis: 56 rem,
  backgroundColor: var(--color-dark--1),
  padding: 3 rem 5 rem 3.5 rem 5 rem,
  display: flex,
  flexDirection: column,
  alignItems: center,
  height: calc(100vh - 4.8 rem),
}
  };

  return (
    <div className="sidebar" style={styles.sidebar}/>
 <Logo/>
      <AppNav/>

      <Outlet/>

      <Footer/>
    </div>
  );
}

export default SideBar;
