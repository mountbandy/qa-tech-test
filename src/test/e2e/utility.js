
export function findEvenIndex(arr) {
    cy.log(arr.toString())
    let left = 0;
    let right = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            right = arr.slice(1).reduce(reducer, 0);
            if (right === i) {
                return i;
            }
        } else {
            left = arr.slice(0, i).reduce(reducer, 0);
            right = arr.slice(i + 1).reduce(reducer, 0);
            if (left === right) {
                return i;
            }
        }
    }

    return null;
}
