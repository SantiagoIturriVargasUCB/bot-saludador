import { sumar } from '../sumador.js';

describe('sumar', () => {
  test('debería sumar dos números positivos correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('debería sumar un número positivo y uno negativo correctamente', () => {
    expect(sumar(5, -3)).toBe(2);
  });

  test('debería sumar dos números negativos correctamente', () => {
    expect(sumar(-2, -4)).toBe(-6);
  });

  test('debería retornar el mismo número cuando uno de los argumentos es 0', () => {
    expect(sumar(0, 4)).toBe(4);
    expect(sumar(5, 0)).toBe(5);
  });

  test('debería manejar correctamente la suma con decimales', () => {
    expect(sumar(1.5, 2.3)).toBeCloseTo(3.8); // Utiliza toBeCloseTo para comparar decimales
  });
});
