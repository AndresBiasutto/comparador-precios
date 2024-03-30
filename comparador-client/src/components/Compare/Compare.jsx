import { useEffect } from "react";
import styles from "./Compare.module.css";
import { useSelector, useDispatch } from "react-redux";
import MiniCard from "../MiniCard/MiniCard";
import { clearList } from "../../redux/actions";

const Compare = () => {
  const dispatch= useDispatch()
  const selectedProducts = useSelector((state) => state.selectedProducts);
  useEffect(() => {
    console.log(selectedProducts);
  }, [selectedProducts]);

  const sortedProducts =
    selectedProducts &&
    selectedProducts.slice().sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return priceA - priceB;
    });
    
  const cleanList=()=>{
      dispatch(clearList())
  }
  return (
    <div className={styles.compareContainer}>
      <h2>comparador</h2>
      <div className={styles.compareVar}>
        <button onClick={cleanList} >limpiar lista</button>
        {selectedProducts? sortedProducts.map((prod, index) => (
          <MiniCard
            key={index}
            store={prod.store}
            name={prod.name}
            price={prod.price}
            picture={prod.picture}
            link={prod.link}
          />
        ))
        :
        (<p>hola</p>)}
      </div>
    </div>
  );
};

export default Compare;
