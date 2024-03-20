import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
//import Card from "../../components/card/Card";
import NavBar from "../../components/NavBar/NavBar";
//import PriceFilter from "../../components/PriceFilter/PriceFilter";
import StoreContainer from "../../components/StoreContainer/StoreContainer";

const Home = () => {
  const carrefourProds = useSelector((state) => state.carrefourProducts);
  const diaProds = useSelector((state) => state.diaProducts);
  const cotoProds = useSelector((state) => state.cotoProducts);
  const [showMessage, setShowMessage] = useState(true);
  const searchIsStarted =
    Object.keys(carrefourProds).length !== 0 ||
    Object.keys(diaProds).length !== 0 ||
    Object.keys(cotoProds).length !== 0;

  useEffect(() => {
    if (searchIsStarted) {
      setShowMessage(false);
    }
  }, [carrefourProds, cotoProds, diaProds, searchIsStarted]);

  return (
    <section>
      <NavBar />
      {searchIsStarted ? (
        <div className={styles.stotreBox}>
          <StoreContainer store={diaProds} />
          <StoreContainer store={carrefourProds} />
          <StoreContainer store={cotoProds} />
        </div>
      ) : showMessage ? (
        "que precios querés comparar?"
      ) : (
        "buscando"
      )}
    </section>
  );
};

export default Home;
