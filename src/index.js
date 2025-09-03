import * as item from "./services/item.js";
import * as cart from "./services/cart.js"

(async function main(){
    console.log("\nBem vindo ao seu carrinho!\n");
    const myCart = [];

    let item1 = await item.createItem("Hotwhells", 29.99, 3);
    let item2 = await item.createItem("Mouse gamer", 49.99, 1);
    await item.addItem(myCart, item1);
    await item.addItem(myCart, item2);

    await item.removeItem(myCart, 1);
    
    cart.displayCart(myCart);
    console.log(`\n--------------------------- Total - R$${await cart.calcularTotal(myCart)}`);
})();