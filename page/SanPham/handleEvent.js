function handlerClickHatHang(x) {
  if(localStorage.getItem('users')){
    let users = JSON.parse(localStorage.getItem('users'))
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    // if(!x.quality){
    //   x = {
    //     ...x,
    //     quality:1
    //   }
      users[isLogin].listCard.push(x)
    // }
    // else{
    //   x = {
    //     ...x,
    //     quality: quality + 1
    //   }
    //   itemTest = users[isLogin].listCard.filter(item => {
    //     if (item.id === x.id) {
    //       return 1;
    //     }
    //   })   
    //   users[isLogin].listCard.push(itemTest)
    // console.log(users[isLogin].listCard) }
    
    localStorage.setItem('users', JSON.stringify(users))
  } else {
    alert('Vui lòng đăng nhập!')
  }
  // if (localStorage.getItem("item")) {
  //   let list = JSON.parse(localStorage.getItem("item"));
  //   x.quantity = 1;
  //   list.push(x);
  //   localStorage.setItem("item", JSON.stringify(list));
  // } else {
  //   localStorage.setItem("item", []);
  //   x.quantity = 1;
  //   let list = [];
  //   list.push(x);
  //   localStorage.setItem("item", JSON.stringify(list));
  // }
  
}
