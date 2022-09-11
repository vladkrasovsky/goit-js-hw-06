/*
скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів

- Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
- Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputValidation);

function onInputValidation(e) {
  const {
    currentTarget: input,
    currentTarget: { value, dataset },
  } = e;

  const isValid = value.trim().length === Number(dataset.length);

  addValidationClasses(input, isValid);
}

function addValidationClasses(input, isValid) {
  const classesNames = ["invalid", "valid"];

  if (isValid) {
    classesNames.reverse();
  }

  input.classList.add(classesNames[0]);
  input.classList.remove(classesNames[1]);
}
