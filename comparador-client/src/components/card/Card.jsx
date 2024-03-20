import styles from "./Card.module.css"
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className={styles.card}>

    <img className={styles.picture} src={props.picture} alt={props.name} />
    <p>{props.name}</p>
    <p>{props.price}</p>
  </div>
  )
}
Card.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

export default Card