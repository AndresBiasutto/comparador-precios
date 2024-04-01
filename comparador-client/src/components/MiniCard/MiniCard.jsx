import styles from "./MiniCard.module.css";
import PropTypes from "prop-types";

const MiniCard = (props) => {
  return (
    <section className={styles.cardContainer}>
      <a href={props.link} target="_blank" className={styles.card}>
        <img className={styles.picture} src={props.picture} alt={props.name} />
        <div className={styles.texts}>
          <div className={styles.storeAndPrice}>
            <p className={styles.store}>{props.store}</p>
            <p className={styles.price}>{props.price}</p>
          </div>
          <p className={styles.name}>{props.name}</p>
        </div>
      </a>
    </section>
  );
};
MiniCard.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  store: PropTypes.string.isRequired,
};
export default MiniCard;
