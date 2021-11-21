import { listHighlights } from "../common/data.js";
import { listBestSale } from "../common/data.js";
import { tieuthuyet } from "../common/data.js";

const listSale = document.querySelector("#listBestSale");
const listHigh = document.querySelector("#listHighlights");
const tieuthuyets = document.querySelector("#tieuthuyet");

let listBestSaleElement = "";
let listTieuThuyet ="";

listBestSale.forEach((x) => {
  return (listBestSaleElement += `
    <div class="container>
      <div class="row">
        <li class="col-12 col-lg-2 col-md-6" style="text-align: center; width: 100%;">
          <div style="padding: 10px">
            <img src="${x.linkImg}" alt="this is image of cai om dieu ki" class="img-fluid">
            <p class="title1">${x.title}</p>
            <p class="title1">Giá: ${x.cost}</p>
            <div style="display: flex; justify-content: center;">
              <button class="btn__item">Đặt ngay</button>
            </div>
          </div>
        </li>
      </div>
    </div>
  `);
});
listSale.innerHTML = listBestSaleElement;


tieuthuyet.forEach((x) => {
  return (listTieuThuyet += `
    <div class="container>
      <div class="row">
        <li class="col-12 col-lg-2 col-md-6" style="text-align: center; width: 100%;">
          <div style="padding: 10px">
            <img src="${x.linkImg}" alt="this is image of cai om dieu ki" class="img-fluid">
            <p class="title1"><a href="../CuaHang/index.html" class="title1">${x.title}</a></p>
            <p class="title1">Giá: ${x.cost}</p>
            <div style="display: flex; justify-content: center;">
              <button class="btn__item">Đặt ngay</button>
            </div>
          </div>
        </li>
      </div>
    </div>
  `);
});
tieuthuyets.innerHTML = listTieuThuyet;

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 4,
  // focus  : 'center',
});

splide.mount();


