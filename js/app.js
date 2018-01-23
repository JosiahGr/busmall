'use strict';

var imgEl = document.getElementById('busMallProducts0');
var imgElTwo = document.getElementById('busMallProducts1');
var imgElThree = document.getElementById('busMallProducts2');

// array to store all busmall photos
Product.allProducts = [];


// make a constructor to hold busmall objects
function Product(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  // this.clickTotal = 0;
  Product.allProducts.push(this);
}

new Product('img/bag.jpg', 'Bag');
new Product('img/banana.jpg', 'Banana');
new Product('img/bathroom.jpg', 'Bathroom');
new Product('img/boots.jpg', 'Boots');
new Product('img/breakfast.jpg', 'Breakfast');
new Product('img/bubblegum.jpg', 'Bubblegum');
new Product('img/chair.jpg', 'Chair');
new Product('img/cthulhu.jpg', 'Almighty Cthulhu');
new Product('img/dog-duck.jpg', 'Dog Duck');
new Product('img/dragon.jpg', 'Dragon');
new Product('img/pen.jpg', 'Pen');
new Product('img/pet-sweep.jpg', 'Pet Sweep');
new Product('img/scissors.jpg', 'Pizza Scissors');
new Product('img/shark.jpg', 'Shark');
new Product('img/sweep.png', 'Sweep');
new Product('img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Product('img/unicorn.jpg', 'Unicorn');
new Product('img/usb.gif', 'USB');
new Product('img/water-can.jpg', 'Water Can');
new Product('img/wine-glass.jpg', 'Wine Glass');




var randomImage = function () {
  return Math.floor(Math.random() * Product.allProducts.length);
};
// while 2 !== 1 || 2 !== 3 {
//   randomly generate new image
// } while 3 !== 1 || 3 !== 2 {
//     randomly generate new image
// }
// access the image from the DOM


function renderImages(){
  var imgEl = document.getElementById('busMallProducts0');
  var imgElTwo = document.getElementById('busMallProducts1');
  var imgElThree = document.getElementById('busMallProducts2');

  var one = randomImage();
  imgEl.src = Product.allProducts[one].filePath;

  var two = randomImage();
  while (one === two) {
    two = randomImage();
  }
  imgElTwo.src = Product.allProducts[two].filePath;

  var three = randomImage();
  while (one === two || two === three || one === three) {
    three = randomImage();
  }
  imgElThree.src = Product.allProducts[three].filePath;
}


// event listener on the page
imgEl.addEventListener('click', randomImage);
imgElTwo.addEventListener('click', randomImage);
imgElThree.addEventListener('click', randomImage);

// callback function to randomly select and display a photo

renderImages();





