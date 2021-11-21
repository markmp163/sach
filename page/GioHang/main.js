const listCardMemory = JSON.parse(localStorage.getItem('users'))
const isLogin = JSON.parse(localStorage.getItem('isLogin'))
const listCard = listCardMemory[isLogin].listCard
console.log(listCard);

let htmls = ''
let defaultPrice = 0
let allPrice = 0

listCard.forEach(item => {
  defaultPrice += item.cost
  htmls += `
  <div class="cart-row cart-info">
    <div class="cart-item cart-column">
      <img class="cart-item-image"
        src="${item.linkImg}"
        width="100" height="100">
      <span class ="cart-item-title">${item.title}</span>
    </div>
    <span class="cart-price cart-column">${item.cost}đ</span>
    <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class ="btn btn-danger" type ="button">Xóa</button>
    </div>
  </div>`

})
document.getElementById('cart-items').innerHTML = htmls

if(!document.getElementById('price-defaut').innerHTML){
  document.getElementById('price-defaut').innerHTML = defaultPrice
}

var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    updatecart();
  });
}

// update cart
function updatecart() {
  var cart_item = document.getElementsByClassName("cart-items")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i];
    var price_item = cart_row.getElementsByClassName("cart-price ")[0];
    var quantity_item = cart_row.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value; // lấy giá trị trong thẻ input
    total = total + price * quantity;
    
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total;
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
  allPrice = parseInt(document.getElementById('price-defaut').innerHTML)
  document.getElementById('tamTinh').innerHTML = allPrice + ' VND'

  document.getElementById('tongCong').innerHTML = allPrice + 30000 + ' VND'
}

// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart();
  });
}

allPrice = parseInt(document.getElementById('price-defaut').innerHTML)
document.getElementById('tamTinh').innerHTML = allPrice + ' VND'
document.getElementById('tongCong').innerHTML = allPrice + 30000 + ' VND'

document.getElementById('btn_lg').onclick = () => {
  
}
  let cart111 = document.getElementsByClassName('cart-info')
  let invoice = []
  // document.getElementsByClassName('cart-info').forEach(cart => {
  //   let cart__title = cart.getElementByTagName('span')[0]
  //   let cart__cost = cart.getElementByTagName('span')[1]
  //   invoice.push({
  //     name: cart__title,
  //     cost: cart__cost,
  //   })
  // })

  for(let k = 0; k < cart111.length; k++){
    let cart__title = cart111[k].getElementByTagName('span')[0].innerHTML
    let cart__cost = cart111[k].getElementByTagName('span')[1].innerHTML
    invoice.push({
      name: cart__title,
      cost: cart__cost,
    })
  }
  console.log(invoice);