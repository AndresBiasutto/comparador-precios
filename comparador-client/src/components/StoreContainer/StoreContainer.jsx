import PriceFilter from "../../components/PriceFilter/PriceFilter";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./StoreContainer.module.css";
import Spinner from "../Spinner/Spinner";

const StoreContainer = (props) => {
  const [store, setStore] = useState({});

  useEffect(() => {
    console.log(store);
    setStore(props.store);
  }, [props.store, store]);

  return (
    <div className={styles.storeContainer}>
      <h2>{store.store} </h2>

      <PriceFilter productList={store} />
      <div className={styles.cards}>
        {Object.keys(store).length !== 0 ? (
          store.products.map((prod, index) => (
            <div key={index}>
              <Card
                key={index}
                store={store.store}
                name={prod.name}
                price={prod.price}
                picture={prod.img}
                link={prod.link}
              />
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
StoreContainer.propTypes = {
  store: PropTypes.shape({
    store: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};
export default StoreContainer;
