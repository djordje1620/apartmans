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
// var x;
// function ispisDatuma(){
//    x =  document.getElementById("d_p").value;
// }
// if(x != undefine)
// {
//     console.log(x);
// }
// document.getElementById("d_pp").value = x;

// function provera(){
//     var vreme = document.getElementById("vr_preuzimanja");
//     var x = vreme.options[vreme.selectedIndex].text;
//     var y = vreme.options[vreme.selectedIndex].value;
//     console.log("Text svojstvo ima vrednost: " + x);
//     console.log("Value svojstvo ima vrednost: " + y);
// }