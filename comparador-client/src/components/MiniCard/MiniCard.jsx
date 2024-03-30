import styles from "./MiniCard.module.css";
import PropTypes from "prop-types";

const MiniCard = (props) => {
  return (
    <section className={styles.cardContainer}>
    <div className={`flex-center ${styles.card}`}>
      <img className={styles.picture} src={props.picture} alt={props.name} />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.price}>{props.price}</p>
      <p className={styles.store}>{props.store}</p>
    </div>
  </section>
  )
}
MiniCard.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    store: PropTypes.string.isRequired,
  };
export default MiniCard