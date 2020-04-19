//import product list from product-list.js 
import productList from '../data/productList.js';
//import function that gets three random products to display
import { getRandomProducts } from '../utils/getRandomProducts.js';

//get elements from DOM
let product1 = document.getElementById('P1');
let product2 = document.getElementById('P2');
let product3 = document.getElementById('P3');

let productImg1 = document.getElementById('P1-img');
let productImg2 = document.getElementById('P2-img');
let productImg3 = document.getElementById('P3-img');

const randomArray = getRandomProducts(productList);

product1.textContent = randomArray[0].name;
productImg1.src = randomArray[0].name;

product2.textContent = randomArray[1].name;
productImg2.src = randomArray[1].name;

product3.textContent = randomArray[2].name;
productImg3.src = randomArray[2].name;