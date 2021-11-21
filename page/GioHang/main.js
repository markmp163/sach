const listCardMemory = JSON.parse(localStorage.getItem('users'))
const isLogin = JSON.parse(localStorage.getItem('isLogin'))
const listCard = listCardMemory[isLogin].listCard

let htmls = ''
let defaultPrice = 0
let allPrice = 0

listCard.forEach(item => {
  defaultPrice += item.cost
  htmls += `
  <div class="cart-row cart-info" id=${item.id}>
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

if (!document.getElementById('price-defaut').innerHTML) {
  document.getElementById('price-defaut').innerHTML = defaultPrice
}

var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i];
  button.addEventListener("click", function () {
    var button_remove = event.target;
    button_remove.parentElement.parentElement.remove();
    let getId = event.path[2].attributes[1].value;
    let newListCart = listCard.filter(o => 
      o.id != getId
    )
    console.log(newListCart)
    localStorage.setItem('users', JSON.stringify([
      ...listCardMemory,
      listCardMemory[isLogin].listCard= newListCart,
      // ...listCardMemory,
      // isLogin:[
      //   ...listCard,

      // ],
    ]))
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
  let hoaDon = []
  let cart__length = listCard.length
  for (let k = 0; k < cart__length; k++) {
    let cart__info = document.getElementsByClassName('cart-info')[k]
    let cart__title = cart__info.getElementsByTagName('span')[0].innerHTML
    let cart__cost = cart__info.getElementsByTagName('span')[1].innerHTML
    let cart__quality = cart__info.getElementsByTagName('input')[0].value
    hoaDon.push({
      cart__title,
      cart__cost,
      cart__quality,
    })
  }

  let tongCong = parseInt(document.getElementById('tongCong').innerHTML)
  let tongTien = {
    tamTinh: document.getElementById('tamTinh').innerHTML,
    tongCong,
  }

  let thanhToan = {
    hoaDon,
    tongCong
  }

  localStorage.setItem('thanhToan', JSON.stringify(thanhToan))
}



