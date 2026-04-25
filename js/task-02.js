// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент < li >.Обов'язково використовуй
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у
// список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');
console.log(ingredientsListRef);

const ingredientsItemsRef = arrayEl => {
  return arrayEl.map(el => {
    const liItemRef = document.createElement('li');
    liItemRef.textContent = el;
    liItemRef.className = '.item';
    console.log(liItemRef);
    return ingredientsListRef.after(liItemRef);
  });
};

ingredientsItemsRef(ingredients);
