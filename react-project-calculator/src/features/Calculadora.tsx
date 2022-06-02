import { useState } from "react";
import { Button } from "../components/Button";
import styles from "./calculadora.module.css";

export const Calculadora = () => {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState(0);

  const onNumberPress = (num?: string) => {
    setValor(valor + num);
  };
  
  const suma = () => {
    setValor("");
    setResultado(+valor);
  };

  const calcular = () => {
    setResultado(resultado + Number(valor));
    setValor("");
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.calcu_container}>
        <div className={styles.resultado_container}>
          <p className={styles.resultado}>{valor || resultado}</p>
        </div>
        <div className={styles.teclado}>
          <Button onClick={onNumberPress} text="7" />
          <Button onClick={onNumberPress} text="8" />
          <Button onClick={onNumberPress} text="9" />
          <Button text="DEL" color="white" backgroundColor="#647298" />
          <Button onClick={onNumberPress} text="4" />
          <Button onClick={onNumberPress} text="5" />
          <Button onClick={onNumberPress} text="6" />
          <Button onClick={suma} text="+" />
          <Button onClick={onNumberPress} text="1" />
          <Button onClick={onNumberPress} text="2" />
          <Button onClick={onNumberPress} text="3" />
          <Button text="-" />
          <Button text="." />
          <Button onClick={onNumberPress} text="0" />
          <Button text="/" />
          <Button text="x" />
          <Button
            text="Reset"
            width="46%"
            color="white"
            backgroundColor="#647298"
          />
          <Button
            text="="
            width="46%"
            onClick={calcular}
            color="white"
            backgroundColor="#d13f30"
          />
        </div>
      </div>
    </section>
  );
};
