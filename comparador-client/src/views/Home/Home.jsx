import styles from "./Home.module.css";
import { getSearch } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(products);
  }, [products]);

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(getSearch(searchTerm));
    }
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <nav className={styles.navBar}>
        <div>logo</div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Ingrese término de búsqueda"
        />
        <button onClick={handleSearch}>Buscar</button>
      </nav>
      <div>
      {products.map((storeProducts, index) => (
          <div key={index}>
            <h3>{storeProducts[0].store}</h3>
            {storeProducts.map((product, productIndex) => (
              <div key={productIndex}>
                <p>{product.product.name}</p>
                <p>{product.product.price}</p>
                <img src={product.product.img} alt={product.product.name} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
