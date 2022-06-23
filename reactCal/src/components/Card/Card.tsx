import styles from "./card.module.css";
import { BsFillDice5Fill } from "react-icons/bs";
import { BiPause } from "react-icons/bi";
import { IAdvice } from "../../features/Advices/Advices.util";
import { useEffect, useState } from "react";

interface ICardProps {
  titulo: number;
  advice: string;
  onClick: () => Promise<void>;
  isLoading: boolean;
}

export const Card = ({ titulo, advice, onClick, isLoading }: ICardProps) => {
  const [showLoaderSlow, setShowLoaderSlow] = useState(false);

  useEffect(() => {
    setShowLoaderSlow(true);
    if (isLoading === false) {
      setTimeout(() => {
        setShowLoaderSlow(false);
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div className={styles.principal}>
      <div className={styles.card}>
        <div className={styles.titulo}>
          <p>Advice {titulo}</p>
        </div>
        <div className={styles.contenido}>
          <p>{advice}</p>
        </div>
        <div className={styles.separador}>
          <hr />
          <div className={styles.pausa}>
            <BiPause size="50px" />
          </div>
        </div>
        <button className={styles.boton} onClick={onClick} disabled={isLoading}>
          <BsFillDice5Fill
            className={showLoaderSlow ? styles.isLoading : ""}
            size="20px"
          />
        </button>
      </div>
    </div>
  );
};
