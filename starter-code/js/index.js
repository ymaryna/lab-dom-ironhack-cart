function deleteItem(e){
  this.parentElement.parentElement.remove()
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  const products = document.querySelectorAll(".container")
  let total = 0
  const totalPrice = Array.from(products).forEach((product) => {
    const price = product.querySelector(".price-tag span")
    const quantity = product.querySelector("input").value
    const priceNumber = Number(price.innerText.replace("$",""))
    const totalProduct = priceNumber*quantity
    
    total += totalProduct
    product.querySelector(".total-product").innerText = `$${totalProduct}`

  })

  const tot = document.querySelector(".total-cart").innerText = `$${total}`
}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  //createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
