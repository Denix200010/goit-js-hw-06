const elementsRef = document.querySelectorAll('.item');
console.log('Number of categories: ', elementsRef.length);

const items = elementsRef.forEach(item => {
    const categories = item.firstElementChild.textContent;
    console.log("Category: ", categories);
    const elements = item.lastElementChild.children.length;
    console.log("Elements: ", elements);
})