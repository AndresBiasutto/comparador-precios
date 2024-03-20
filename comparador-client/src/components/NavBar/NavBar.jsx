import styles from "./NavBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCarrefourProds, getDiaProds, getCotoProds, cleanDetail } from "../../redux/actions";

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      //dispatch(getSearch(searchTerm));
      dispatch(cleanDetail())
      dispatch(getCarrefourProds(searchTerm));
      dispatch(getDiaProds(searchTerm));
      dispatch(getCotoProds(searchTerm));
    }
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <nav className={styles.navBar}>
      <div>LA DOÑA SABE</div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Ingrese término de búsqueda"
      />
      <button onClick={handleSearch}>Buscar</button>
    </nav>
  );
};

export default NavBar;
