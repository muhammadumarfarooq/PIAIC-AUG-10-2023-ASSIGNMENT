// Problem # 1 (Modify Array)

function updateArray (items: string[], indexOfNewItem: number, newItemName: string) {
   const itemCopy = [...items];
   itemCopy.splice(indexOfNewItem, 0, newItemName);
   return itemCopy;
}

// const result= updateArray(['Mange', 'Orange', 'Banana'], 1, 'Grapes');
// console.log(result);


// Problem # 2 (Cart Functionality)

interface Item {id: string, name: string, price: number, qty: number}

const cart: Item[] = [];

function addItem (item: Item) {
    cart.push(item);
}

function removeItem (itemIndex: number) {
    cart.splice(itemIndex, 1);
}

function updateQty (itemIndex: number, newQty: number) {
    const updatedQtyItem = {...cart[itemIndex], qty: newQty};
    cart.splice(itemIndex, 1, updatedQtyItem);
}

addItem({id: '1', name: 'Bag', price: 2, qty: 2});
addItem({id: '2', name: 'Lotion', price: 5, qty: 1});
// console.log("Item added", cart);
// removeItem(0);
// console.log("Remove Item", cart);
// updateQty(0, 5);
// console.log("Update Item", cart);

// Problem # 3 (Use While loop to print first 25 integers)

function printIntegers() {
    let n = 0;

    while (n <= 25) {
        console.log("Integer", n);
        n++;
    }
}

// printIntegers();

// Problem # 4 (Print first 10 event numbers)

function printFirst10Even() {
    let n = 1;

    while (n <= 20) {
        if(n % 2 == 0){
            console.log("Integer", n);
        }
        n++;
    }
}

// printFirst10Even();

// Problem # 5 (Print print factorial)

function printFactorial(integer: number) {
    if(integer < 0) return;
    if(integer === 0) return 1;

    let factorial = 1;

    let n = 1;

    while (n <= integer) {
        factorial = factorial * n;
        n++;
    }

    return factorial;
}

// const result = printFactorial(5);
// console.log(result);

// Problem # 6 (Remove Negative numbers)
// const numArray = [1,2,3,-2,4,-4];
//
// for(let i = 0; i < numArray.length; i++){
//     if(numArray[i] < 0){
//         numArray.splice(i, 1);
//     }
// }
//
// console.log(numArray);

// Problem # 7 (Sum of numbers)
function sumOfNumbers (numArray: number[]) {
    let i = 0;

    let total = 0;

    while (i < numArray.length) {
        total = total + numArray[i];
        i++;
    }

    return total;
}

// const result = sumOfNumbers([1,2,3]);
// console.log(result);


// Problem # 8
function convertTemperatures (celsiusTemperature: number[]) {
    let i = 0;

    const fTemp = [];

    while (i < celsiusTemperature.length) {
        const result = (celsiusTemperature[i] * (9/5)) + 32;
        fTemp.push(result);
        i++;
    }

    return fTemp;
}

const result = convertTemperatures([1,2,3]);
console.log(result);
