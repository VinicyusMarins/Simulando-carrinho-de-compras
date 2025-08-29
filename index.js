import * as item from "./services/item.js";
import * as cart from "./services/cart.js"

(async function main(){
    console.log("\nBem vindo ao seu carrinho!\n");
    const car = [];

    let item1 = await item.createItem("Hotwhells", 29.99, 3);
    let item2 = await item.createItem("Mouse gamer", 49.99, 1);
    item.addItem(car, item1);
    item.addItem(car, item2);
    
    cart.displayCart(car);
    console.log(`\n--------------------------- Total - R$${await cart.calcularTotal(car)}`);
})();