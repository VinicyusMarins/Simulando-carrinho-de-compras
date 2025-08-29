export{
    addItem,
    createItem,
    removeItem,
    deleteItem
}

//criar um item
async function createItem(name, value, quantity) {
    return {
        name,
        value,
        quantity,
        subtotal: () => quantity * value,
    };
}
//adicionar um item
async function addItem(userCart, item) {
    userCart.push(item);
}
//remover item
async function removeItem(userCart, item) {
    
}
//deletar item
async function deleteItem(userCart, item) {
    userCart.splice(item);
}
