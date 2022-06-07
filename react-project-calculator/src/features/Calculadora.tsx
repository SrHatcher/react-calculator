import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import styles from "./calculadora.module.css";

export const Calculadora = () => {
  const [{ accValor, valor }, setValores] = useState({
    valor: 0,
    accValor: 0,
  });
  const [valorMostrar, setValorMostrar] = useState(0);

  const [operacion, setOperacion] = useState("");

  const onNumberPress = (num?: string) => {
    if (!num) return;
    setValores((prevValue) => ({ ...prevValue, valor: +num }));
    setValorMostrar(+num);
  };

  const suma = () => {
    const suma = accValor + Number(valor);
    setValores((prevValue) => ({ ...prevValue, accValor: suma }));
    setValorMostrar(suma);
  };

  const multiplicar = () => {
    const multiplicar = accValor * Number(valor);
    setValores((prevValue) => ({ ...prevValue, accValor: multiplicar }));
    setValorMostrar(multiplicar);
  };

  const onOperacionPress = (operacion: string) => {
    setOperacion(operacion);
    if (operacion === "+") suma();
    if (operacion === "x") multiplicar();
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.calcu_container}>
        <div className={styles.resultado_container}>
          <p className={styles.resultado}>{valorMostrar}</p>
        </div>
        <div className={styles.teclado}>
          <Button onClick={onNumberPress} text="7" />
          <Button onClick={onNumberPress} text="8" />
          <Button onClick={onNumberPress} text="9" />
          <Button text="DEL" color="white" backgroundColor="#647298" />
          <Button onClick={onNumberPress} text="4" />
          <Button onClick={onNumberPress} text="5" />
          <Button onClick={onNumberPress} text="6" />

          <Button onClick={onOperacionPress} text="+" />

          <Button onClick={onNumberPress} text="1" />
          <Button onClick={onNumberPress} text="2" />
          <Button onClick={onNumberPress} text="3" />

          <Button onClick={onOperacionPress} text="-" />

          <Button text="." />
          <Button onClick={onNumberPress} text="0" />

          <Button onClick={onOperacionPress} text="/" />
          <Button onClick={onOperacionPress} text="x" />

          <Button
            text="Reset"
            width="46%"
            color="white"
            backgroundColor="#647298"
          />
          <Button
            text="="
            width="46%"
            onClick={() => onOperacionPress(operacion)}
            color="white"
            backgroundColor="#d13f30"
          />
        </div>
      </div>
    </section>
  );
};
