import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = () => {
  
  return (
    <nav className={`${styles.navBar}` }>
      <Link to={"/"} className={styles.logo}>LA DOÑA SABE</Link>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
