
let old = 10
let pricebyold;

switch(true){

case old <= 12 :
pricebyold = 'the ticket price is 10$';
    break;

case old >= 13 && old <= 17 :
pricebyold = 'the ticket price is 15$';
    break;

case old >= 18 :
pricebyold = 'the ticket price is 20$';
    break;

}
console.log(pricebyold);