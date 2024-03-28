import SearchBar from "../../components/SearchBar/SearchBar"
import styles from "./Landing.module.css"

const Landing = () => {
  return (
    <div className={ `flex-center ${styles.Landing}` } >
    <div className={styles.titles}>
    <h1>LA DOÑA SABE</h1>
    <h2>y encuenra buenos precios</h2>      
    </div>

        <SearchBar />
    </div>
  )
}

export default Landing