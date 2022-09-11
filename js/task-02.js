/*
скрипт, який для кожного елемента масиву ingredients:

Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
Додасть назву інгредієнта як його текстовий вміст.
Додасть елементу клас item.
Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.querySelector("#ingredients"),
};

const ingredientsItems = ingredients.map(createIngredientElement);

refs.ingredientsList.append(...ingredientsItems);

function createIngredientElement(ingredient) {
  const item = document.createElement("li");

  item.classList.add("item");
  item.textContent = ingredient;

  return item;
}
