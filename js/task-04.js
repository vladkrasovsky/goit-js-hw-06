/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

- Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
- Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
- Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;

const refs = {
  decrementCounterBtn: document.querySelector('[data-action="decrement"]'),
  incrementCounterBtn: document.querySelector('[data-action="increment"]'),
  counterText: document.querySelector("#value"),
};

const onDecrementCounterClick = (event) => {
  counterValue -= 1;
  setCounterValue();
};

const onIncrementCounterClick = (event) => {
  counterValue += 1;
  setCounterValue();
};

refs.decrementCounterBtn.addEventListener("click", onDecrementCounterClick);
refs.incrementCounterBtn.addEventListener("click", onIncrementCounterClick);

function setCounterValue() {
  refs.counterText.textContent = counterValue;
}
