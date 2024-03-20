import PriceFilter from "../../components/PriceFilter/PriceFilter";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const StoreContainer = (props) => {
  const [store, setStore] = useState({});

  useEffect(() => {
    console.log(store);
    setStore(props.store);
  }, [props.store, store]);

  return (
    <div>
      <h2>{store.store} </h2>

      <PriceFilter productList={store} />
      {Object.keys(store).length !== 0
        ? store.products.map((prod, index) => (
            <div key={index}>
              <Card
                key={index}
                name={prod.name}
                price={prod.price}
                picture={prod.img}
              />
            </div>
          ))
        : "buscando algo"}
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
      })
    ).isRequired,
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};
export default StoreContainer;
