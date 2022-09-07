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
  boxesBlock: document.querySelector("#boxes"),
};

const onCreateBtnClick = (event) => {
  createBoxes(refs.numberInput.value);
};

const onDestroyBtnClick = (event) => {
  destroyBoxes();
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function createBoxes(amount) {
  const boxItems = [];
  const boxProps = {
    height: 30,
    width: 30,
    increment: 10,
  };
  const lastBoxItem = refs.boxesBlock.lastElementChild;

  if (lastBoxItem) {
    boxProps.height = parseInt(lastBoxItem.style.height) + boxProps.increment;
    boxProps.width = parseInt(lastBoxItem.style.width) + boxProps.increment;
  }

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.height = `${boxProps.height}px`;
    box.style.width = `${boxProps.width}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxItems.push(box);

    boxProps.height += boxProps.increment;
    boxProps.width += boxProps.increment;
  }

  refs.boxesBlock.append(...boxItems);
}

function destroyBoxes() {
  refs.boxesBlock.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
