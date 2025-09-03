export {
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
        subtotal: () => quantity * value
    };
}
//adicionar um item
async function addItem(userCart, item) {
    userCart.push(item);
}
//remover item
async function removeItem(userCart, index) {
    const indexRemove = index - 1;
    if(userCart[indexRemove].quantity > 0){
        userCart[indexRemove].quantity -= 1;
    }else{
        deleteItem(userCart, userCart[indexRemove].name);
    }
}
//deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}
