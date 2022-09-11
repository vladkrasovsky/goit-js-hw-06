/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

- Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
- Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
- Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;

const refs = {
  counterDecrementBtn: document.querySelector('[data-action="decrement"]'),
  counterIncrementBtn: document.querySelector('[data-action="increment"]'),
  counterText: document.querySelector("#value"),
};

const onCounterDecrement = (e) => {
  counterValue -= 1;
  setCounterText();
};

const onCounterIncrement = (e) => {
  counterValue += 1;
  setCounterText();
};

refs.counterDecrementBtn.addEventListener("click", onCounterDecrement);
refs.counterIncrementBtn.addEventListener("click", onCounterIncrement);

function setCounterText() {
  refs.counterText.textContent = counterValue;
}
