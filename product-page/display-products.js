import selectRandomProducts from '../utils/get-random-image.js';
import productList from '../data/product-list.js';

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

// the variables below still need to be applied to something 

let options = [option1, option2, option3];
let images = [image1, image2, image3];

const theSelectedRadioButton = document.querySelector('input[type="radio"]:checked');

const randomImages = selectRandomProducts(productList);

