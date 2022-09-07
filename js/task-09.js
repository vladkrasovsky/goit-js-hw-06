/*
скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

const refs = {
  body: document.querySelector("body"),
  colorChangeBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};

const onColorChangeBtnClick = (event) => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
};

refs.colorChangeBtn.addEventListener("click", onColorChangeBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
