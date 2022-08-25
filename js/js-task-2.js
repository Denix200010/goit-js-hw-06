const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector('#ingredients');
const elements = [];
const element = ingredients.forEach(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.classList.add('item');
  itemRef.innerHTML = ingredient;
  elements.push(itemRef);
})
listRef.append(...elements)