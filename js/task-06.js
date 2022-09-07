/*
скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів

- Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
- Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputRef = document.querySelector("#validation-input");

const onValidationInputBlur = (event) => {
  const element = event.currentTarget;
  const { value, dataset } = element;
  const classNamesArr = ["invalid", "valid"];

  if (value.length === Number(dataset.length)) {
    classNamesArr.reverse();
  }

  element.classList.add(classNamesArr[0]);
  element.classList.remove(classNamesArr[1]);
};

inputRef.addEventListener("blur", onValidationInputBlur);
