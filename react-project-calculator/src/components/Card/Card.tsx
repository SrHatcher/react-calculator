import styles from "./card.module.css";
import { BsFillDice5Fill } from "react-icons/bs";
import {BiPause} from "react-icons/bi"

export const Card = () => {
  return (
    <div className={styles.principal}>
      <div className={styles.card}>
        <div className={styles.titulo}>
          <p>Advice #400</p>
        </div>
        <div className={styles.contenido}>
          <p>hola</p>
        </div>
        <div className={styles.separador}>
          <hr />
          <div className={styles.pausa}>
            <BiPause size="50px"/>
          </div>
        </div>
        <div className={styles.boton}>
          <BsFillDice5Fill size="20px" />
        </div>
      </div>
    </div>
  );
};
