/*
скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

// Default value
refs.fontSizeControl.value = refs.fontSizeControl.min;
refs.fontSizeControl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(e) {
  const { value } = e.currentTarget;
  setTextFontSize(value);
}

function setTextFontSize(size) {
  refs.text.style.fontSize = `${size}px`;
}
