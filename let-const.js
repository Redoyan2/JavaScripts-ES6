// uses of let : 
// 1. When the variable changes by value to value 
// let price = 100;
// function setValue(){
//     price = 150;
//     console.log(price);
// }
// setValue();

// This function return the value of price is 150. Becouse its change in function corner.


// uses of const :
// 1. When the variable is non change in every where 

const price2 = 200;

function setPrice(){
    price2 = 250;
    console.log(price2);
}

setPrice();
// this function does not return function internal value. becouse the const valriable does not change in any causes 

