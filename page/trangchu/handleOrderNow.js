function handleOrderNow(x){
    if(!localStorage.getItem('users')){
        alert('Vui lòng đăng nhập!')
    }
    else{
        let users = JSON.parse(localStorage.getItem('users'))
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))
        users[isLogin].listCard.push(x)
        localStorage.setItem('users', JSON.stringify(users))
    }
}

// if(localStorage.getItem('users')){
//     let users = JSON.parse(localStorage.getItem('users'))
//     let isLogin = JSON.parse(localStorage.getItem('isLogin'))
//     users[isLogin].listCard.push(x)
//     localStorage.setItem('users', JSON.stringify(users))
//   } else {
//     alert('Vui lòng đăng nhập!')
//   }