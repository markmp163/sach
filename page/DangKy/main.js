const $ = document.querySelector.bind(document)

const inputNumber = $('#number')
const inputOTP = $('#otp')
const inputPass = $('#password')
const inputRePass = $('#re-password')
if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify([]))
}

//phone number
inputNumber.onblur = (e) => {
    let value = e.target.value
    let regex= /^\d{10}$/

    if(!value.match(regex) || e.target.value.length == 0){
        inputNumber.classList.add('validate')
        inputNumber.nextElementSibling.classList.add('validate');
        inputNumber.parentElement.parentElement.querySelector('.text-validate').innerHTML = 'Hãy nhập số điện thoại!'
    }
}

inputNumber.onfocus = (e) => {
    inputNumber.classList.remove('validate')
    inputNumber.nextElementSibling.classList.remove('validate');
    inputNumber.parentElement.parentElement.querySelector('.text-validate').innerHTML = ''
}

//otp
inputOTP.onblur = (e) => {
    if(e.target.value.length == 0){
        inputOTP.classList.add('validate') 
        inputOTP.nextElementSibling.innerHTML = 'Không được bỏ trống mã OTP!'
    }
}

inputOTP.onfocus = (e) => {
    inputOTP.classList.remove('validate')
    inputOTP.nextElementSibling.innerHTML = ''
}


//password
inputPass.onblur = (e) => {
    let value = e.target.value
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    
    if(!value.match(regex) || e.target.value.length == 0){
        inputPass.classList.add('validate')
        inputPass.nextElementSibling.classList.add('validate');
        inputPass.parentElement.parentElement.querySelector('.text-validate').innerHTML = 'Mật khẩu cần ít nhất 8 ký tự, bao gồm số, chữ thường và chữ in hoa!'
    }
}

inputPass.onfocus = (e) => {
    inputPass.classList.remove('validate')
    inputPass.nextElementSibling.classList.remove('validate');
    inputPass.parentElement.parentElement.querySelector('.text-validate').innerHTML = ''
}


//re pass
inputRePass.onblur = (e) => {
    let value = e.target.value
    if(value != inputPass.value || e.target.value.length == 0){
        inputRePass.classList.add('validate')
        inputRePass.nextElementSibling.classList.add('validate');
        inputRePass.parentElement.parentElement.querySelector('.text-validate').innerHTML = 'Mật khẩu không khớp!'
    }
}

inputRePass.onfocus = (e) => {
    inputRePass.classList.remove('validate')
    inputRePass.nextElementSibling.classList.remove('validate');
    inputRePass.parentElement.parentElement.querySelector('.text-validate').innerHTML = ''
}

//showPass

function showPass(){
    if($('#password').type === 'password'){
        $('#password').type = 'text'
    } else{
        $('#password').type = 'password'
    }
}

function showRePass(){
    if($('#re-password').type === 'password'){
        $('#re-password').type = 'text'
    } else{
        $('#re-password').type = 'password'
    }
}

//save account into local

$('#register-btn').onclick = (e) => {
    
    let user = {
        phoneNumber: $('#number').value,
        password: $('#password').value,
        listCard: [],
    }
    let users = JSON.parse(localStorage.getItem('users'))
    if(user.phoneNumber && user.password){
        users.push(user)
        alert('Đăng ký thành công')
        localStorage.setItem('users', JSON.stringify(users))
    }
    else{
        e.preventDefault()
        alert('Đăng ký thất bại')
    }
}