import * as item from "./services/item.js";
import * as cart from "./services/cart.js"

(async function main(){
    console.log("Bem vindo ao seu carrinho!");
    const cart = [];

    let item1 = await item.createItem("Hotwhells", 29.99, 3);
    let item2 = await item.createItem("Mouse gamer", 49.99, 1);
    item.addItem(cart, item1);
    item.addItem(cart, item2);
    
})();