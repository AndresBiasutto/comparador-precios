import SearchBar from "../../components/SearchBar/SearchBar"
import styles from "./Landing.module.css"
import bigLogo from "../../assets/LOGOGRANDE.svg"

const Landing = () => {
  return (
    <div className={ `flex-center ${styles.Landing}` } >
    <div className={styles.titles}>
    <img src={bigLogo} className={styles.logosvg} />
    <h2>y encuenra buenos precios</h2>      
    </div>

        <SearchBar />
    </div>
  )
}

export default Landing