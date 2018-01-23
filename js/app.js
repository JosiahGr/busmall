'use strict';

Product.allProducts = [];
Product.totalClicks = 0;
Product.lastDisplayed = [];
var imgEl = document.getElementById('busMallProductsL');
var imgElTwo = document.getElementById('busMallProductC');
var imgElThree = document.getElementById('busMallProductsR');

// make a constructor to hold busmall objects
function Product(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  this.clickedOn = 0;
  this.displayTotal = 0;
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

renderImages();

function renderImages(){
  if(Product.allTheClicks > 25) {
    alert('Thanks for participating.');
    console.log('CAUTION:User clicked more then 25 times');
  } else {
    var imgEl = document.getElementById('busMallProductsL');
    var imgElTwo = document.getElementById('busMallProductsC');
    var imgElThree = document.getElementById('busMallProductsR');
    Product.allTheClicks++;

    var one = randomImage();
    imgEl.src = Product.allProducts[one].filePath;
    Product.allProducts[one].displayTotal++;
    var two = randomImage();
    while (one === two) {
      two = randomImage();
    }
    imgElTwo.src = Product.allProducts[two].filePath;
    Product.allProducts[two].displayTotal++;
    var three = randomImage();
    while (one === two || two === three || one === three) {
      three = randomImage();
    }
    imgElThree.src = Product.allProducts[three].filePath;
    Product.allProducts[three].displayTotal++;
  }
}

imgEl.addEventListener('click', renderImages);
imgElTwo.addEventListener('click', renderImages);
imgElThree.addEventListener('click', renderImages);











