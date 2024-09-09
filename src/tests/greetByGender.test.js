import { greetByGender } from '../greetByGender';

test('should greet by gender as "Sr." when isSpanish is true and isMale is true', () => {
  expect(greetByGender('Juan', true, true)).toBe('Hola, Sr. Juan');
});

test('should greet by gender as "Sra." when isSpanish is true and isMale is false', () => {
  expect(greetByGender('Ana', false, true)).toBe('Hola, Sra. Ana');
});

test('should greet by gender as "Mr." when isSpanish is false and isMale is true', () => {
  expect(greetByGender('John', true, false)).toBe('Hello, Mr. John');
});

test('should greet by gender as "Ms." when isSpanish is false and isMale is false', () => {
  expect(greetByGender('Jane', false, false)).toBe('Hello, Ms. Jane');
});
