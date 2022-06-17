import { dividir, multiplicar, restar, suma } from './calculadora.util';

// validate the sum fuction sum two numbers
describe('sum', () => {
  it('should sum two numbers', () => {
    expect(suma(1, '2')).toBe(3);
  });
});

describe('mult', () => {
  it('should multiply two numbers', () => {
    expect(multiplicar(2, '2')).toBe(4);
  });
});

describe('div', () => {
  it('should divide two numbers', () => {
    expect(dividir(2, '2')).toBe(1);
  });
});

describe('restar', () => {
  it('should rest two numbers', () => {
    expect(restar(2, '2')).toBe(0);
  });
});
