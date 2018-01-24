'use strict';
Product.allProducts = [];
Product.totalClicks = 0;
Product.lastDisplayed = [];
var sectionEl = document.getElementById('product-section');
var ulEl = document.getElementById('results');
var productDisplayed = [];
var productNames = [];
var productVotes = [];

// make a constructor to hold busmall objects
function Product(filepath, name) {
  this.name = name;
  this.filepath = filepath;
  this.votes = 0;
  this.timesDisplayed = 0;
  Product.allProducts.push(this);
  productNames.push(this.name);
  productDisplayed.push(this.timesDisplayed);
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

var leftEl = document.getElementById('busMallProductsL');
var centerEl = document.getElementById('busMallProductsC');
var rightEl = document.getElementById('busMallProductsR');

function randomImage() {
  var randomLeft = Math.floor(Math.random() * Product.allProducts.length);
  var randomCenter = Math.floor(Math.random() * Product.allProducts.length);
  var randomRight = Math.floor(Math.random() * Product.allProducts.length);

  while(randomLeft === randomRight || randomCenter === randomRight || randomCenter === randomLeft || Product.lastDisplayed.includes(randomLeft) || Product.lastDisplayed.includes(randomCenter) || Product.lastDisplayed.includes(randomRight)) {

    console.log('Duplicate was caught');
    randomLeft = Math.floor(Math.random() * Product.allProducts.length);
    randomCenter = Math.floor(Math.random() * Product.allProducts.length);
    randomRight = Math.floor(Math.random() * Product.allProducts.length);
  }

  //  set the src and alt attributes of the two images
  leftEl.src = Product.allProducts[randomLeft].filepath;
  leftEl.alt = Product.allProducts[randomLeft].name;
  centerEl.src = Product.allProducts[randomCenter].filepath;
  centerEl.alt = Product.allProducts[randomCenter].name;
  rightEl.src = Product.allProducts[randomRight].filepath;
  rightEl.alt = Product.allProducts[randomRight].name;

  // incremenet the number of times each image was shown
  Product.allProducts[randomLeft].timesDisplayed += 1;
  Product.allProducts[randomCenter].timesDisplayed += 1;
  Product.allProducts[randomRight].timesDisplayed += 1;

  // keep track of three images as the previously displayed
  Product.lastDisplayed[0] = randomLeft;
  Product.lastDisplayed[1] = randomCenter;
  Product.lastDisplayed[2] = randomRight;
}

function handleClick(event) {
  Product.totalClicks++;

  for(var i in Product.allProducts) {
    if(event.target.alt === Product.allProducts[i].name) {
      Product.allProducts[i].votes++;
    }
  }
  if(Product.totalClicks > 24) {
    sectionEl.removeEventListener('click', handleClick);
    alert('Thank\'s for participating! Here are the results of your selections.');
    showResults();
    updateVotes();
    renderChart();
  } else {
    randomImage();
  }
}

function showResults() {
  for(var i in Product.allProducts) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.allProducts[i].name + ' has ' + Product.allProducts[i].votes + ' votes and was displayed ' + Product.allProducts[i].timesDisplayed + ' times.';
    ulEl.appendChild(liEl);
  }
}

function updateVotes() {
  for(var i in Product.allProducts) {
    productVotes[i] = Product.allProducts[i].votes;
    productDisplayed[i] = Product.allProducts[i].timesDisplayed;
  }
}

function renderChart(){
  var context = document.getElementById('chart-placeholder');

  var chartColors = ['#e6194b', '#3cb44b', '#ffe119', '#0082c8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#d2f53c', '#fabebe', '#008080', '#e6beff', '#aa6e28', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000080', '#000000'];

  var productChart = new Chart(context, {
    type: 'horizontalBar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Votes Per Product',
        data: productVotes,
        backgroundColor: chartColors,
        borderWidth: 1,
      }, {
        label: 'Times Displayed',
        data: productDisplayed,
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

sectionEl.addEventListener('click', handleClick);
randomImage();