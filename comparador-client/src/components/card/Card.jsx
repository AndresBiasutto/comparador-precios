import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { GrCompare } from "react-icons/gr";
import { FaExternalLinkAlt } from "react-icons/fa";
import { addProduct } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleCompare = () => {
    dispatch(addProduct({ ...props }));
  };

  return (
    <section className={styles.cardContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img className={styles.banner_image} src={props.picture} />
          <h2 className={styles.h2} >{props.price} </h2>
          <p>{props.name} </p>
        </div>
        <div className={styles.button_wrapper}>
          <button
            className={`${styles.btn} ${styles.outline}`}
            onClick={handleCompare}
            title="comparar"
          >
            <GrCompare />
          </button>
          <button
            className={`${styles.btn} ${styles.fill}`}
            href={props.link}
            target="_blank"
            title={`ir a: ${props.link}`}
          >
            <FaExternalLinkAlt />
          </button>
        </div>
      </div>

      {/* <div className={`flex-center ${styles.card}`}>
        <div className={styles.buttons}>
          <a
            className={styles.link}
            href={props.link}
            target="_blank"
            title={`ir a: ${props.link}`}
          >
            <FaExternalLinkAlt />
          </a>
          <button
            className={styles.compare}
            onClick={handleCompare}
            title="comparar"
          >
            <GrCompare />
          </button>
        </div>
        <img className={styles.picture} src={props.picture} alt={props.name} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.price}>{props.price}</p>
      </div> */}
    </section>
  );
};

Card.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
