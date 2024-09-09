import { greet } from './greet';

export function greetByName(name, isSpanish) {
  const greeting = greet(isSpanish);
  return `${greeting}, ${name}`;
}
