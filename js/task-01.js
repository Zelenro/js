const listRef = document.querySelector('#categories');
const listAllRef = document.querySelectorAll('li.item');
console.log('Number of categories:', listAllRef.length);

function titleCategoryRef() {
  listAllRef.forEach(el => {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.querySelectorAll('li').length);
  });
}

titleCategoryRef();
