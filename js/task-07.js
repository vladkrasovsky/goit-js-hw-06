/*
скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

const refs = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const onFontSizeControlInput = ({ currentTarget: { value } }) => {
  refs.text.style.fontSize = `${value}px`;
};

// Default value
refs.fontSizeControl.value = refs.fontSizeControl.min;

refs.fontSizeControl.addEventListener("input", onFontSizeControlInput);
