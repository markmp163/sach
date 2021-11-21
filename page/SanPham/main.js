import { listBooks } from "../common/data.js";

console.log(listBooks, 111);

const listBook = document.querySelector("#listBook");
let lists = "";
listBooks.forEach((x) => {
  lists += `
     <li style="text-align: center;">
       <div style="padding: 10px; max-width: 200px">
         <img src="${x.linkImg}" alt="this is image of cai om dieu ki" style="width: 150px">
         <p class="title1">${x.title}</p>
         <p class="title1">Giá: ${x.cost}</p>
         <div style="display: flex; justify-content: center;">
           <button type="button" class="btn__item btn__buy" onclick ='{handlerClickHatHang(${JSON.stringify(x)})}'><a href="../GioHang/index.html">Mua ngay</a></button>
         </div>
       </div>
     </li>
  `;
});

listBook.innerHTML = lists;

//
// var btn_click = document.getElementsByClassName("btn__buy");
// for (var i = 0; i < btn_click.length; i++) {
// 	var button = btn_click[i];
// 	button.addEventListener("click", function (e) {
// 		console.log(e.target.parentElement.parentElement.getElementsByClassName('title1')[0].innerHTML);
// 	});
// }
