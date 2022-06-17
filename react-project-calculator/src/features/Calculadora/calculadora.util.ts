type TOperationFuction = (accValor: number, valor: string) => number;

export const suma = (accValor: number, valor: string) => {
  const suma = accValor + Number(valor);
  return suma;
};

export const multiplicar = (accValor: number, valor: string) => {
  const multipliacion = (accValor || 1) * Number(valor);
  return multipliacion;
};

export const dividir = (accValor: number, valor: string) => {
  const division = !accValor ? Number(valor) : (accValor || 1) / Number(valor);
  return division;
};

export const restar = (accValor: number, valor: string) => {
  const resta = accValor - Number(valor);
  return resta;
};

export const operation: Record<string, TOperationFuction> = {
  '+': suma,
  '-': restar,
  '*': multiplicar,
  '/': dividir,
};
