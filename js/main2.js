window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('nav');
    if(window.pageYOffset > 20){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
});

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var todayDate = String(date.getDate()).padStart(2,'0');
var datePattern = year + '-' + month + '-' + todayDate;
document.getElementById("d_p").defaultValue = datePattern;
document.getElementById("d_v").defaultValue = datePattern;

function ispisDatuma(){
     var datumPreuzIndex = document.getElementById('d_p').value;
     console.log(datumPreuzIndex);
     //document.getElementById('datum_p').value = datumPreuzIndex;
     localStorage.getElementById('datum_p').value = datumPreuzIndex;
 }
 
// var datumPreuzimanja = document.getElementById("d_p").value;
// console.log(datumPreuzimanja);

// if(datumPreuzimanja != datePattern)
// {
    
// }
