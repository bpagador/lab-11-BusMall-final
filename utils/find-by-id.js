export default function findById(array, itemId) {
    let itemFound = null;

    array.forEach(element => {
        if (element.id === itemId) { 
            itemFound = element; }
    });

    return itemFound;
}