'use strict';

// array to store all busmall photos

Product.allProducts = [];

// make a constructor to hold busmall objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  Product.allProducts.push(this);
}

// Create busmall instances

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

// access the image from the DOM
var imgEl = document.getElementById('busMallProducts');

// event listener on the page
imgEl.addEventListener('click', randomImage);

// callback function to randomly select and display a photo

function randomImage() {
  var randomIndex = Math.floor(Math.random() * Product.allProducts.length);

  imgEl.src = Product.allProducts[randomIndex].filepath;
}


// invoke the callback

randomImage();
