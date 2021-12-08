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
document.getElementById("d_p").value = datePattern;
document.getElementById("d_v").value = datePattern;

function upisDatuma() {
    var d_p = document.getElementById("d_p").value;
    localStorage.setItem("d_preuzimanja", d_p);
    var d_v = document.getElementById("d_v").value;
    localStorage.setItem("d_vracanja", d_v);
    var v_p = document.getElementById("vremePreuzimanja").value;
    localStorage.setItem("v_preuzimanja", v_p);
    var v_v = document.getElementById("vremeVracanja").value;
    localStorage.setItem("v_vracanja", v_v);

    var vozila_lab = document.getElementById("lab_js");
    vozila_lab.classList.add("boja_lab");
}
function onl(){
    var d_pr = localStorage.getItem("d_preuzimanja");
    document.getElementById("d_pp").value = d_pr;
    localStorage.removeItem("d_preuzimanja");

    var d_vr = localStorage.getItem("d_vracanja");
    document.getElementById("d_vv").value = d_vr;
    localStorage.removeItem("d_vracanja");

    var v_pr = localStorage.getItem("v_preuzimanja");
    document.getElementById("vremePreuzimanja2").value = v_pr;
    localStorage.removeItem("v_preuzimanja");

    var v_vr = localStorage.getItem("v_vracanja");
    document.getElementById("vremeVracanja2").value = v_vr;
    localStorage.removeItem("v_vracanja");
    var vozila_lab = document.getElementById("lab_js");
    vozila_lab.classList.add("boja_lab");
}    

// function removLocalStorage(){
    
// }
// function readValue() {
//     var x = localStorage.getItem("mytime");
//     document.getElementById("demo").innerHTML = x;
// }
      
// function ispisDatuma(){
//     localStorage.setItem("vreme_preuzimanja", x);
//     alert(x);
// }
// if(localStorage){
    
// }


// var d_p = document.getElementById("d_pp");
// d_p.value = x;