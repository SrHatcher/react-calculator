import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getAdvice, IAdvice } from "./Advices.util";

export const Advices = () => {
  const [advice, setAdvice] = useState<IAdvice>();
  const [isLoading, setIsLoading] = useState(false);

  const getRandomAdvice = async () => {
    setIsLoading(true);
    try {
      const resAdvice = await getAdvice();
      setIsLoading(false);
      setAdvice(resAdvice);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomAdvice();
  }, []);

  if (!advice) return <p>Cargando</p>;

  return (
    <Card
      isLoading={isLoading}
      advice={advice.slip.advice}
      titulo={advice.slip.id}
      onClick={getRandomAdvice}
    />
  );
};

//1ra
// advice = undefined
// !advice => cargando
// se resuelve la promesa   y se hace el setState

//2do render

// react hace rerender del componente
// se vuelve a validar si hay datos
// muestra datos
