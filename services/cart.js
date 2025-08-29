export{
    calcularTotal,
    displayCart
}

//display cart
async function displayCart(userCart) {
    for(let a in userCart){
        console.log(`${Number(a)+1}- ${userCart[a].name} | ${userCart[a].quantity}un | R$ ${userCart[a].value} - Subtotal: R$ ${userCart[a].subtotal()}`);
    }
}

//Calcular Total
async function calcularTotal(userCart) {
    let total = 0;
    for (const i in userCart) {
        total += userCart[i].subtotal();
    }

    return total.toFixed(2).replace(".",",");
}
