import styles from "./Home.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import StoreContainer from "../../components/StoreContainer/StoreContainer";
import Spinner from "../../components/Spinner/Spinner";
import Compare from "../../components/Compare/Compare";

const Home = () => {
  const carrefourProds = useSelector((state) => state.carrefourProducts);
  const diaProds = useSelector((state) => state.diaProducts);
  const cotoProds = useSelector((state) => state.cotoProducts);

  const searchIsStarted =
    Object.keys(carrefourProds).length !== 0 ||
    Object.keys(diaProds).length !== 0 ||
    Object.keys(cotoProds).length !== 0;

  useEffect(() => {}, [carrefourProds, cotoProds, diaProds, searchIsStarted]);

  return (
    <section className={styles.home}>
      <NavBar />
      {searchIsStarted ? (
        <div className={styles.stotreBox}>
          <StoreContainer store={diaProds} />
          <StoreContainer store={carrefourProds} />
          <StoreContainer store={cotoProds} />
        </div>
      ) : (
        <Spinner />
      )}
        <Compare/>
    </section>
  );
};

export default Home;
