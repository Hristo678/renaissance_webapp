import Cookies from 'js-cookie';

const CART_COOKIE_NAME = 'cart';

export function addToCart(product) {
  const existingCart = Cookies.get(CART_COOKIE_NAME) || '{}'; // Retrieve the cookie as a string
  const parsedCart = JSON.parse(existingCart);
  console.log()
    if(parsedCart?.[product.name]?.[product.mass]){
        const currentMassQuantity = parsedCart?.[product.name]?.[product.mass]
        parsedCart[product.name][product.mass] = currentMassQuantity + product.quantity
    }else{
        console.log(parsedCart)
        console.log(product.name)
        console.log(product.mass)
        console.log(product.quantity)
        parsedCart[product.name] = {}
            parsedCart[product.name][product.mass] = product.quantity
            parsedCart[product.name].product = product
    }
 
//   const updatedCart = [...parsedCart, product];
  Cookies.set(CART_COOKIE_NAME, JSON.stringify(parsedCart), { expires: 7 }); // Convert back to JSON and set the cookie
}

export function removeFromCart(itemId) {
  const existingCart = Cookies.get(CART_COOKIE_NAME) || '[]';
  const parsedCart = JSON.parse(existingCart);
  const updatedCart = parsedCart.filter(item => item.id !== itemId);
  Cookies.set(CART_COOKIE_NAME, JSON.stringify(updatedCart), { expires: 7 });
}

export function getCart() {
  const cart = Cookies.get(CART_COOKIE_NAME) || '[]';
  return JSON.parse(cart); // Parse the cookie string to JSON
}