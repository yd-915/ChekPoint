import AppNav from "./AppNav";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function SideBar() {
  const styles = {
   sidebar {
  flex-basis: 56rem;
  background-color: var(--color-dark--1);
  padding: 3rem 5rem 3.5rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 4.8rem);
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
