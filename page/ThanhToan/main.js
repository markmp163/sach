const thanhToan = JSON.parse(localStorage.getItem('thanhToan'))
console.log(thanhToan);

let listBuyHTMLs = ''
thanhToan.hoaDon.forEach(x => {
    listBuyHTMLs += `
        <div style="display: flex">
            <p style = "flex: 4">${x.cart__title} x ${x.cart__quality}</p>
            <p style="flex: 1; font-weight: 600;">${x.cart__cost}</p>
        </div>
    `
})
document.getElementById('list-buy').innerHTML = listBuyHTMLs
document.getElementById('tamTinh').innerHTML = thanhToan.tongCong - 30000 + ' VNĐ'
document.getElementById('tongCong').innerHTML = thanhToan.tongCong + ' VNĐ'


document.getElementsByClassName('btn__dathang')[0].onclick = (e) => {
    if (document.getElementById('nhanHang').checked) {
            localStorage.setItem('phuongThuc', JSON.stringify('Nhận hàng'))
    }
    else if((document.getElementById('chuyenKhoan').checked)){
            localStorage.setItem('phuongThuc', JSON.stringify('Chuyển khoản'))
    }
    else{
        localStorage.setItem('phuongThuc', JSON.stringify('Chưa chọn'))
    }
}