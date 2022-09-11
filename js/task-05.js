/*
скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous"
*/

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const onNameInput = (e) => {
  const { value } = e.currentTarget;
  refs.nameOutput.textContent = value.trim().length ? value : "Anonymous";
};

refs.nameInput.addEventListener("input", onNameInput);
