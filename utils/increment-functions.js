import findById from '../utils/find-by-id.js';


export function incrementTimesSeen(votes, id) {
    let productObject = findById(votes, id);

    if (!productObject) {
        addItem(votes, id);
        productObject = findById(votes, id);
    }
    productObject.timesSeen++;
}

export function incrementTimesClicked(votes, id) {
    let chosenProduct = findById(votes, id);

    if (!chosenProduct) {
        addItem(votes, id);
        chosenProduct = findById(votes, id);
    }

    chosenProduct.timesClicked++;

}

export function addItem(votes, id) {
    const productObject = {
        id: id,
        timesSeen: 0,
        timesClicked: 0,
    };
    votes.push(productObject);
}