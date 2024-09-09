
import { greet, greetByName, greetByGender, isSpanish } from './src';

const alertButton = document.getElementById('greet-button');
alertButton.addEventListener('click', () => {
  const languageSpanishCheckbox = document.getElementById('language-spanish');
  const greeting = greet(isSpanish(languageSpanishCheckbox));
  alert(greeting);
});

const greetButtonByName = document.getElementById('greet-button-by-name');
greetButtonByName.addEventListener('click', () => {
  const languageSpanishCheckbox = document.getElementById('language-spanish');
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value.trim();
  if (name) {
    const greeting = greetByName(name, isSpanish(languageSpanishCheckbox));
    alert(greeting);
  } else alert('Please introduce your name.');
});

const greetButtonByGender = document.getElementById('greet-button-by-gender');
greetButtonByGender.addEventListener('click', () => {
  const languageSpanishCheckbox = document.getElementById('language-spanish');
  const nameInput = document.getElementById('name-input');
  const genderMale = document.getElementById('gender-male');
  const genderFemale = document.getElementById('gender-female');

  const name = nameInput.value.trim();
  if (name) {
    if (genderMale.checked || genderFemale.checked) {
      const greeting = greetByGender(
        name,
        genderMale.checked,
        isSpanish(languageSpanishCheckbox)
      );
      alert(greeting);
    } else {
      alert('Please, select a gender.');
    }
  } else {
    alert('Please introduce your name.');
  }
});
