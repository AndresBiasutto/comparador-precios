import { useEffect } from "react";
import styles from "./PriceFilter.module.css";
import { useDispatch } from "react-redux";
import { sortCarrefourProds, sortCotoProds, sortDiaProds } from "../../redux/actions";
import PropTypes from "prop-types";
import { TbPigMoney } from "react-icons/tb";

const PriceFilter = (props) => {
  const dispatch = useDispatch();
  const productList= props.productList
  const productos = props.productList.products;

  const sortedProducts =
    productos &&
    productos.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return priceA - priceB;
    });

  useEffect(() => {
    console.log(sortedProducts);
  }, [sortedProducts]);

  const handleSort = () => {
    if (productList.store === "Carrefour") {
      dispatch(sortCarrefourProds(sortedProducts));
    }
    if (productList.store === "Coto") {
      dispatch(sortCotoProds(sortedProducts));
    }
    if (productList.store === "Dia") {
      dispatch(sortDiaProds(sortedProducts));
    }

  };

  return (
    <section className={styles.priceFilter}>
      <div>
        <button className={styles.button} onClick={handleSort}>menor precio <TbPigMoney className={styles.pig} /></button>
      </div>
    </section>
  );
};
PriceFilter.propTypes = {
  productList: PropTypes.shape({
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
PriceFilter.propTypes = {
    productList: PropTypes.shape({
      store: PropTypes.string.isRequired,
      products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      })).isRequired,
      _id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired
    }).isRequired
  };
export default PriceFilter;
