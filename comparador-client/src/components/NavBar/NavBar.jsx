import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg"

const NavBar = () => {
  
  return (
    <nav className={`${styles.navBar}` }>
      <Link to={"/"} className={styles.logo}><img className={styles.logosvg} src={logo} /></Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
