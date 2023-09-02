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

printIntegers();