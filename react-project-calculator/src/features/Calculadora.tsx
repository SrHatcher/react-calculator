import { useState } from 'react';
import { Button } from '../components/Button';
import styles from './calculadora.module.css';

export const Calculadora = () => {
  const [{ accValor, valor }, setValores] = useState({
    valor: '',
    accValor: 0,
  });
  const [valorMostrar, setValorMostrar] = useState('');

  const [prevOperacion, setOperacion] = useState('');

  const setValor = (newValor: string) => {
    setValores((prevValue) => ({
      ...prevValue,
      valor: newValor,
    }));
  };

  const setAcumulador = (newAcc: number) => {
    setValor('');
    setValores((prevValue) => ({ ...prevValue, accValor: newAcc }));
    setValorMostrar(newAcc.toString());
  };

  const onNumberPress = (num: string) => {
    const concatNumber = valor + num;
    setValor(concatNumber);
    setValorMostrar(concatNumber);
  };

  const suma = () => {
    const suma = accValor + Number(valor);
    setAcumulador(suma);
  };

  const multiplicar = () => {
    const multipliacion = (accValor || 1) * Number(valor);
    setAcumulador(multipliacion);
  };

  const dividir = () => {
    const division = !accValor
      ? Number(valor)
      : (accValor || 1) / Number(valor);

    setAcumulador(division);
  };

  const restar = () => {
    const resta = accValor - Number(valor);
    setAcumulador(resta);
  };

  const onOperacionPress = (operacion: string) => {
    const op = prevOperacion === '' ? operacion : prevOperacion;
    if (op === '+') suma();
    if (op === 'x') multiplicar();
    if (op === '/') dividir();
    if (op === '-') restar();
    setOperacion(operacion);
  };

  return (
    <section className={styles.main_container}>
      <div className={styles.calcu_container}>
        <div className={styles.resultado_container}>
          <p className={styles.resultado}>{valorMostrar}</p>
        </div>
        <div className={styles.teclado}>
          <Button onClick={onNumberPress} text='7' />
          <Button onClick={onNumberPress} text='8' />
          <Button onClick={onNumberPress} text='9' />
          <Button text='DEL' color='white' backgroundColor='#647298' />
          <Button onClick={onNumberPress} text='4' />
          <Button onClick={onNumberPress} text='5' />
          <Button onClick={onNumberPress} text='6' />

          <Button onClick={onOperacionPress} text='+' />

          <Button onClick={onNumberPress} text='1' />
          <Button onClick={onNumberPress} text='2' />
          <Button onClick={onNumberPress} text='3' />

          <Button onClick={onOperacionPress} text='-' />

          <Button text='.' />
          <Button onClick={onNumberPress} text='0' />

          <Button onClick={onOperacionPress} text='/' />
          <Button onClick={onOperacionPress} text='x' />

          <Button
            text='Reset'
            width='46%'
            color='white'
            backgroundColor='#647298'
          />
          <Button
            text='='
            width='46%'
            onClick={() => onOperacionPress(prevOperacion)}
            color='white'
            backgroundColor='#d13f30'
          />
        </div>
      </div>
    </section>
  );
};
