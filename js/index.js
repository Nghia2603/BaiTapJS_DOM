// Bài tập 1
document.getElementById('btn-tinh').onclick = function tinhTien() {
    // input: luong1Ngay (number), soNgayLam (number)
    var luong1Ngay = document.getElementById('nhap-luong-1n').value;
    var soNgayLam = document.getElementById('so-ngay-lam').value;
    // output: tongTien (number)
    var tongTien = 0;
    // process: tongTien = luong1Ngay * soNgayLam
    tongTien = luong1Ngay * soNgayLam;
    document.getElementById('tong-luong').innerHTML = 'Tổng lương của bạn là ' + tongTien + ' $';
}

// Bài tập 2
document.getElementById('btn-tinh-TB').onclick = function tinhTrungBinh() {
    // input: 5 numbers
    var a = +document.getElementById('num1').value;
    var c = +document.getElementById('num3').value;
    var d = +document.getElementById('num4').value;
    var b = +document.getElementById('num2').value;
    var e = +document.getElementById('num5').value;
    // output: avr
    var avr = 0;
    // process
    avr =  ( a + b + c + d +e ) / 5;
    document.getElementById('txt-tinh-TB').innerHTML = 'Trung bình cộng cần tính là ' + avr;
}

// Bài tập 3
document.getElementById('btn-quy-doi').onclick = function quyDoiTien() {
    // input: soTienUsd (number)
    var soTienUsd = document.getElementById('nhap-usd').value;
    // output: tienVnd (number)
    var tienVnd = 0;
    // process: tienVnd = soTienUsd * 23500
    tienVnd = soTienUsd * 23500;
    document.getElementById('txt-quy-doi').innerHTML = soTienUsd + '$ tương đương ' + new Intl.NumberFormat('vn-VN').format(tienVnd) + ' VND';
}

// Bài tập 4
document.getElementById('btnCal').onclick = function tinhDienChu() {
    // inout: width (number), height (number)
    var chieuRong = +document.getElementById('width').value;
    var chieuDai = +document.getElementById('height').value;
    // Output: chuVi, dienTich
    var chuVi = 0;
    var dienTich = 0;
    // Process:
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById('txtCal').innerHTML = 'Diện tích: ' + dienTich + '; Chu vi: ' + chuVi;

}

// Bài tập 5
document.getElementById('btnSum').onclick = function tinhTong() {
    // input: num
    var num = +document.getElementById('number').value;
    // output: tong2KySo
    var tong2KySo = 0;
    // process
    var a = Math.floor ( num / 10 );
    var b = num - (a * 10);
    tong2KySo = a + b;
    document.getElementById('txtSum').innerHTML = tong2KySo;

}
