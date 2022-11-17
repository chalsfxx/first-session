// ITERATION 1

function updateSubtotal(product) {
  
  console.log('Calculating subtotal, yey!');

  const priceNum = product.querySelector('.price span');
  const quantityNum = product.querySelector('.quantity input');

  let price = priceNum.innerHTML;
  let quantity = quantityNum.value;

  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
}

function calculateAll() {
  const products = document.getElementsByClassName("product")
  const totalSum = document.querySelector('.subtotal span')

  for (let i = 0; i < products.length; i++){
    updateSubtotal(products[i])
  }

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
