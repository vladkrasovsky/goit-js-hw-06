/*
скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

1. Розміри найпершого <div> - 30px на 30px.
2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

const refs = {
  numberInput: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick(e) {
  createBoxes(refs.numberInput.value);
}

function onDestroyBtnClick(e) {
  destroyBoxes();
  refs.numberInput.value = "";
}

function createBoxes(amount) {
  const SIZE_INCREMENT = 10;
  const boxItems = [];
  const boxSize = {
    height: 20,
    width: 20,
  };

  const boxToStart = refs.boxesContainer.lastElementChild || boxSize;
  let { style: { height, width } = boxSize } = boxToStart;

  for (let i = 0; i < amount; i += 1) {
    height = parseInt(height) + SIZE_INCREMENT;
    width = parseInt(width) + SIZE_INCREMENT;
    boxItems.push(createNewBox(height, width));
  }

  refs.boxesContainer.append(...boxItems);
}

function createNewBox(height, width) {
  const box = document.createElement("div");

  box.style.height = `${height}px`;
  box.style.width = `${width}px`;
  box.style.backgroundColor = getRandomHexColor();

  return box;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
