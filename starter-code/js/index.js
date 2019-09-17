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
  const newQuantityInputDiv = document.createElement("div")
  newQuantityInputDiv.setAttribute("class", "input-field")
  const newQuantityInput = document.createElement("input")
  newQuantityInput.setAttribute("name", "QTY")
  newQuantityInput.setAttribute("type", "text")
  newQuantityInput.setAttribute("placeholder", "0")
  newQuantityInputDiv.appendChild(newQuantityInput)
  return newQuantityInputDiv


}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){
  const newItemRow = document.createElement("div")
  newItemRow.setAttribute("class", "container")
  newItemRow.appendChild(createQuantityInput())
  const father = document.getElementById("father")
  father.appendChild(newItemRow)

}

function createNewItem(){
  const newProductName = document.querySelector(".name-create").value
  const newProductPrice = document.querySelector(".price-create").value

  createNewItemRow(newProductName,newProductPrice)


  
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('create-button');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
