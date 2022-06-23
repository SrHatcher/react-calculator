export interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

const random = () => {
  const random = 1 + (Math.random() * 150);
  return Math.floor(random);
};

export const getAdvice = async () => {
  const numRandom = random();
  const res = await fetch(`https://api.adviceslip.com/advice/${numRandom}`);
  const advice = await res.json();

  return advice as IAdvice;
};
