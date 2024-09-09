import { greet } from '../greet';

test('should greet with "Hola" when isSpanish is true', () => {
  expect(greet(true)).toBe('Hola');
});

test('should greet with "Hello" when isSpanish is false', () => {
  expect(greet(false)).toBe('Hello');
});
