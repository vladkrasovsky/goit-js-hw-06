/*
скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"
*/

const refs = {
  inputName: document.querySelector("#name-input"),
  outputName: document.querySelector("#name-output"),
};

const onInputNameInput = (event) => {
  const { value } = event.currentTarget;
  refs.outputName.textContent = value.length ? value : "Anonymous";
};

refs.inputName.addEventListener("input", onInputNameInput);
