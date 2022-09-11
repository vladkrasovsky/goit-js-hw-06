/*
скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

const refs = {
  body: document.querySelector("body"),
  colorChangeBtn: document.querySelector(".change-color"),
  colorValue: document.querySelector(".color"),
};

// Default color value
setColorValue("#ffffff");

refs.colorChangeBtn.addEventListener("click", onColorChange);

function onColorChange() {
  const color = getRandomHexColor();

  setBodyBgColor(color);
  setColorValue(color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBodyBgColor(color) {
  refs.body.style.backgroundColor = color;
}

function setColorValue(color) {
  refs.colorValue.textContent = color;
}
