//randomizer function

export function getRandomProduct(productList) {
    const randomItem = Math.floor(Math.random() * 20);
    return productList[randomItem];
}

//randomizer function applied to all three products, while loop in place to prevent duplicates
export default function getRandomProducts(productList) {
    let product1 = getRandomProduct(productList);
    let product2 = getRandomProduct(productList);
    let product3 = getRandomProduct(productList);

    while (product1 === product2 || product1 === product2 || product2 === product3) {
        product1 = getRandomProduct(productList);
        product2 = getRandomProduct(productList);
        product3 = getRandomProduct(productList);
    }

    return [product1, product2, product3];
}