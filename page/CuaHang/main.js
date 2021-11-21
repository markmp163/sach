let product = JSON.parse(localStorage.getItem('product'));
console.log(product)
let titleBookElement = document.querySelector('#titleBook');
let authorElement = document.querySelector('#author');
let nhaSXElement = document.querySelector('#nhaSX');
let imageBookElement = document.querySelector('#imageBook');couse
let couseElement = document.querySelector('#couse');
let btn_dhElemet = document.querySelector('#btn_dh');

titleBookElement.innerText = product.title;
authorElement.innerText = product.athor;
nhaSXElement.innerText = product.publishingCompany;
couseElement.innerText = product.cost;
imageBookElement.innerHTML = `
  <img class="position-relative" src="${product.linkImg}"
    style="width: 100%;height: auto;" alt="">
  <span
    class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
`

btn_dhElemet.innerHTML = `
  <a href="../GioHang/index.html" style="text-decoration: none; color: white; width: 100%; height: 100%"
  onclick ='{handlerClickHatHang(${JSON.stringify(product)})}'
  >Mua ngay</a>
`


