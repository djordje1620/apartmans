var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var todayDate = String(date.getDate()).padStart(2,'0');
var datePattern = year + '-' + month + '-' + todayDate;
document.getElementById("datum_p").defaultValue = datePattern;
document.getElementById("datum_v").defaultValue = datePattern;

document.getElementById("d_p").defaultValue = datePattern;
document.getElementById("d_v").defaultValue = datePattern;

function ispisDatuma(){
    var datumPreuzIndex = document.getElementById('d_p').value;
    console.log(datumPreuzIndex);
    document.getElementById('datum_p').value = datumPreuzIndex;
}