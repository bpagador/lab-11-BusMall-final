import productList from '../data/product-list.js';
import getRandomProducts from '../utils/get-random-products.js';
import { incrementTimesSeen, incrementTimesClicked } from '../utils/increment-functions.js';
import updateChoicesArray from '../utils/stringify.js';

let choicesArray = [];
let clickCounter = 0;

//get elements from DOM
let product1 = document.getElementById('P1');
let product2 = document.getElementById('P2');
let product3 = document.getElementById('P3');

let productImg1 = document.getElementById('P1-img');
let productImg2 = document.getElementById('P2-img');
let productImg3 = document.getElementById('P3-img');

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');

const survey = document.getElementById('survey-form');

getRandomSurveyProducts();

survey.addEventListener('submit', (event) => {
    event.preventDefault();
    const userChoice = document.querySelector('input[type=radio]:checked').value;
    
    incrementTimesSeen(choicesArray, userChoice);
    incrementTimesClicked(choicesArray, userChoice);

    updateChoicesArray();

    clickCounter++;

    if (clickCounter >= 3) {
        window.location = '../results-page';
    } else {
        getRandomSurveyProducts();
    }
});

incrementTimesSeen();
incrementTimesClicked();

function getRandomSurveyProducts() {
    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;

    const randomArray = getRandomProducts(productList);

    product1.textContent = randomArray[0].name;
    productImg1.src = randomArray[0].image;
    radio1.value = randomArray[0].id;

    product2.textContent = randomArray[1].name;
    productImg2.src = randomArray[1].image;
    radio2.value = randomArray[1].id;

    product3.textContent = randomArray[2].name;
    productImg3.src = randomArray[2].image;
    radio3.value = randomArray[1].id;

    incrementTimesSeen(choicesArray, randomArray[0].id);
    incrementTimesSeen(choicesArray, randomArray[1].id);
    incrementTimesSeen(choicesArray, randomArray[2].id);
}
