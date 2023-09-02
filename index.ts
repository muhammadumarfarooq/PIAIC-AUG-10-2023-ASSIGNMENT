// Problem # 1 (Modify Array)

function updateArray (items: string[], indexOfNewItem: number, newItemName: string) {
   const itemCopy = [...items];
   itemCopy.splice(indexOfNewItem, 0, newItemName);
   return itemCopy;
}

const result= updateArray(['Mange', 'Orange', 'Banana'], 1, 'Grapes');
console.log(result);

