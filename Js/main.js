var ngayLam01 = document.getElementById("ngayLam");
var contentKQ1 = document.getElementById("kQ1");

function Calc() {
    contentKQ1.innerHTML = "Lương :  " + (ngayLam01.value*100.000).toFixed(3)+ " VNĐ";
}

///////// bài 2

var sothuc1 = document.getElementById("num2-1")
var sothuc2 = document.getElementById("num2-2")
var sothuc3 = document.getElementById("num2-3")
var sothuc4 = document.getElementById("num2-4")
var sothuc5 = document.getElementById("num2-5")

var contentKQ2 = document.getElementById("kQ2");

function calcAvg() {
    var Avg = 0;
    Avg = (parseInt(sothuc1.value)+parseInt(sothuc2.value)+parseInt(sothuc3.value)+parseInt(sothuc4.value)+parseInt(sothuc5.value))/5;

    contentKQ2.innerHTML = "Giá trị trung bình của 5 số thực : " + Avg;
}

//////bài 3

var usdELE = document.getElementById("USD3");
var contentKQ3 = document.getElementById("kQ3");

function quyDoi() {
    contentKQ3.innerHTML= "Số Tiền Quy Đổi Được : " +(usdELE.value*23.500).toFixed(3) + "VND";
}

///// bài 4

var chieudai = document.getElementById('dai4');
var chieurong = document.getElementById('rong4');
var contentKQ4 = document.getElementById('kQ4');

function HCN(){
    contentKQ4.innerHTML = "Chu vi hình chữ nhật :" +(parseInt(chieudai.value) + parseInt(chieurong.value))*2 +" <br>Diện tích hình chữ nhật : " +chieudai.value*chieurong.value;
}

//// bài 5
var numberget = document.getElementById('number5');
contentKQ5 = document.getElementById('kQ5');


function getNumber() {
    contentKQ5.innerHTML = "Số hàng chục : " +parseInt(numberget.value/10) + "<br>Số hàng đơn vị : "+ numberget.value%10 +"<br>Tổng 2 ký số : " +(parseInt(numberget.value%10) + parseInt(numberget.value/10)); 
}
