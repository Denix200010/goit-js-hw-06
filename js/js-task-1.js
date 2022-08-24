const elementsRef = document.querySelectorAll('.item');

const titleRef = document.querySelectorAll('.item > h2');
console.log('Number of categories: ', titleRef.length);

const items = elementsRef.forEach(item => {
    const categories = item.firstElementChild.textContent;
    console.log("Category: ", categories);
    const elements = item.lastElementChild.children.length;
    console.log("Elements: ", elements);
})