// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");



// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// let shoppingCart = document.getElementById("shopping-cart")
// let incrementBtn = document.getElementById("increment-btn")
// let count = 0

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.addEventListener('click' , function(event ) {
//       modal.style.display = "none"; 
// })

// console.log(modal);
// console.log(btn.onclick);
// console.log(span.onclick);
// console.log(window.onclick);

// function andreAlcohol() {
//   shoppingCart.textContent = shoppingCart + incrementBtn
// }


// function incrementBtn() {
//   count += +1
//   shoppingCart.innerHTML = count 
// }
// console.log(count)


// function andreAlcohol() {
//   shoppingCart.textContent = shoppingCart + incrementBtn
// }

let shoppingCart = document.getElementById("shopping-cart")
// let incrementBtn = document.getElementById("increment-btn")
let count = 0
let swallow = ["Eba", "Pounded yam", "Amala"]
let soups = ["OGBONA", "EDIKAIKONG", "VEGETABLE", "EWEDU", "EGUSI"]
let rice = ["WHITE RICE", "JOLLOF RICE", "FRIED RICE"]
let sidesSnacks = ["PLANTAIN", "SMALL CHOPS"]
let beefFish = ["SPICY CHICKEN", "PEPPERED TURKEY", "FISH", "FRIED MEAT"]
let softDrinksJuice = ["PEPSI", "COCA-COLA", "SPRITE", "FANTA", "HOLLANDIA", "CHI-VITA"]
let liqour = ["HENNESY", "ANDRE", "FOUR-COUSIN", "FORTH STREET", "JAMESON"]
let foodlist = swallow + " " + soups + " " +rice + " " +sidesSnacks+ " " + beefFish+ " " + softDrinksJuice + " " + liqour


function eba() {
  count += +1
  shoppingCart.innerHTML = count + swallow
}

console.log(liqour)