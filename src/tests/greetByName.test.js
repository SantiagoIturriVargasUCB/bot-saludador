import { greetByName } from '../greetByName';

test('should greet by name with "Hola" when isSpanish is true', () => {
  expect(greetByName('Juan', true)).toBe('Hola, Juan');
});

test('should greet by name with "Hello" when isSpanish is false', () => {
  expect(greetByName('Juan', false)).toBe('Hello, Juan');
});
