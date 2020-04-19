//randomizer function

export function getRandomProduct(productArray) {
    const randomItem = Math.floor(Math.random() * 20);
    return productArray[randomItem];
}

//randomizer function applied to all three products, while loop in place to prevent duplicates
export function getRandomProducts(productArray) {
    let product1 = getRandomProduct(productArray);
    let product2 = getRandomProduct(productArray);
    let product3 = getRandomProduct(productArray);

    while (product1 === product2 || product1 === product2 || product2 === product3) {
        product1 = getRandomProduct(productArray);
        product2 = getRandomProduct(productArray);
        product3 = getRandomProduct(productArray);
    }

    return [product1, product2, product3];
}