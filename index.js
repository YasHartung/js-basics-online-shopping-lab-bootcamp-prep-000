var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemToCart = {
    itemName: `${item}`,
    itemPrice: Math.floor(Math.random()*100)

  };
 cart.push(itemToCart);
 return `${itemToCart.item} has been added to your cart.`;
}

function viewCart() {
var cartList = "In your cart, you have"
for (var i = 0; i < cart.length; i++) {
  if (cart.length !== 1 && i == cart.length -1){
    cartList += " and"
  }
  cartList += `${cart[i].itemName} at $${cart[i].itemPrice}`
  if( i == cart.length -1) {
    cartList += "."
  }
  else {
    cartList += ","
  }
}
return cartList;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
