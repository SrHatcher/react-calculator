import {
  dividir,
  multiplicar,
  restar,
  suma,
} from '../../../src/features/Calculadora/calculadora.util';

describe('Operaciones aritméticas', () => {
  it('Debería sumar 2 numeros y devolver un número', () => {
    expect(suma(1, '2')).toBe(3);
  });

  it('Debería  multiplicar 2 numeros y devolver un número ', () => {
    expect(multiplicar(2, '2')).toBe(4);
  });

  it('Debería dividir 2 numeros y revolver la divición', () => {
    expect(dividir(2, '2')).toBe(1);
  });

  it('Si el numerador es 0 debería devolver el denominador', () => {
    expect(dividir(0, '2')).toBe(2);
  });

  it('Si se divide por 0 debería devolver el 0', () => {
    expect(dividir(2, '0')).toBe(0);
  });

  it('should rest two numbers', () => {
    expect(restar(2, '2')).toBe(0);
  });
});
