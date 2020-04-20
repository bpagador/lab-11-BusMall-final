import findById from '../utils/find-by-id.js';
import productList from '../data/product-list.js';

const results = document.getElementById('results');
const choiceResults = JSON.parse(localStorage.getItem('CHOICES-MADE'));

for (let i = 0; i < choiceResults.length; i++) {
    const productLineItem = choiceResults[i];

    const tr = document.createElement('tr');

    const productData = document.createElement('td');
    const product = findById(productList, productLineItem.id);
    productData.textContent = product.name;

    const seenData = document.getElementById('td');
    seenData.textContent = productLineItem.timesSeen;

    const clickedData = document.getElementById('td');
    clickedData.textContent = productLineItem.timesClicked;

    tr.appendChild(productData);
    tr.appendChild(seenData);
    tr.appendChild(clickedData);

    results.appendChild(tr);
}
