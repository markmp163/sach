import { listBooks } from "../common/data.js";

console.log(listBooks, 111);

const listBook = document.querySelector("#listBook");
let lists = "";
listBooks.forEach((x) => {
  lists += `
     <li style="text-align: center;">
       <div style="padding: 10px; max-width: 200px">
       <a href="../CuaHang/index.html">
          <img src="${x.linkImg}" alt="this is image of cai om dieu ki" 
            class="img-fluid" onclick ='{handlerClickProduct(${JSON.stringify(x)})}' />
        </a>
         <p class="title1">${x.title}</p>
         <p class="title1">Giá: ${x.cost}</p>
         <div style="display: flex; justify-content: center;">
           <button type="button" class="btn__item btn__buy" onclick ='{handlerClickHatHang(${JSON.stringify(x)})}'><a href="../GioHang/index.html" style="width: 100%; height: 100%">Mua ngay</a></button>
         </div>
       </div>
     </li>
  `;
});

listBook.innerHTML = lists;