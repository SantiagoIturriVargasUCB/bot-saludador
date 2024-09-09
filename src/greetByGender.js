import { greet } from './greet';

export function greetByGender(name, isMale, isSpanish) {
  let genderTitle = isMale ? 'Mr.' : 'Ms.';
  if (isSpanish) genderTitle = isMale ? 'Sr.' : 'Sra.';
  const greeting = greet(isSpanish);
  return `${greeting}, ${genderTitle} ${name}`;
}
