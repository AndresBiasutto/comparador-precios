import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCarrefourProds,
  getDiaProds,
  getCotoProds,
  cleanDetail,
} from "../../redux/actions";
import { FaSearchDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { clearList } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(cleanDetail());
      dispatch(getCarrefourProds(searchTerm));
      dispatch(getDiaProds(searchTerm));
      dispatch(getCotoProds(searchTerm));
    }
      dispatch(clearList())
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  

  return (
    <form className={`flex-center-row ${styles.searchBar}` }>
      <input
        className={styles.input}
        type="search"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Ya, busque algo joven"
      />
      <Link to="/home" className= {`flex-center ${ styles.link}`}>
        <button className={`flex-center ${styles.button}` } onClick={handleSearch}><FaSearchDollar className={styles.glass} /></button>
      </Link>
    </form>
  );
};

export default SearchBar;
