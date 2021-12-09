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
}    

function uspesanIzbor(){
    if(document.getElementById("d_p").value == "")
    {
        alert("Niste uneli datum preuzimanja");
    }
    else if(document.getElementById("d_v").value == "")
    {
        alert("Niste uneli datum vraćanja");
    }
}

// Validacija forme za rezervaciju
function Reg(){

    var a = document.forms["forma"]["datum_preuz"].value;
    var b = document.forms["forma"]["datum_vraca"].value;
    var c = document.getElementById("vremePreuzimanja2").value;
    var d = document.getElementById("vremeVracanja2").value;
    var ime = document.getElementById("ime");
    var prezime = document.getElementById("prezime");
    var email = document.getElementById("email");
    var telefon = document.getElementById("telefon");
    var automobil = document.getElementById("izbor_auta");
    
    var Text = /^[a-zA-z]+$/;
    var Email = /^[a-zA-z\-0-9]+\@[a-zA-z]+\.[a-z]{2,3}$/; 
    var Telefon = /^0[0-9]{2}[/-][0-9]{3,4}-?[0-9]{3,4}$/;

   

    if(a == null || a == '' || b == null || b == '' || c == null || c == '' || d == null || d == '' || ime.value =='' || ime.value == null || prezime.value == '' || prezime.value == null || email.value == '' || email.value == null || telefon.value == '' || telefon.value == null || automobil.value == null || automobil.value =='izaberi'){
        alert("greska! popunite sva polja");
        
        if(!ime.value.match(Text)){
            ime.classList.add('badForm-border');
            ime.value = "";
        }else{
            ime.classList.add('goodForm-border');
        }
        if(!prezime.value.match(Text)){
            prezime.classList.add('badForm-border');
            prezime.value = "";
        }else{
            prezime.classList.add('goodForm-border');
        }
        
        if(!email.value.match(Email)){
            email.classList.add('badForm-border');
            email.value = "";
        }else{
            email.classList.add('goodForm-border');
        }
    
        if(!telefon.value.match(Telefon)){
            telefon.classList.add('badForm-border');
            telefon.value = "";
        }else{
            telefon.classList.add('goodForm-border');
        }
        if(a == null || a =='')
        {
            document.forms["forma"]["datum_preuz"].classList.add("badForm-border");
        }
        else if(a != null && a != '') 
        {
            document.forms["forma"]["datum_preuz"].classList.add("goodForm-border");
        }
        if(b == null || b =='')
        {
            document.forms["forma"]["datum_vraca"].classList.add("badForm-border");
        }
        else if(b != null && b != '') 
        {
            document.forms["forma"]["datum_vraca"].classList.add("goodForm-border");
        }
        if(c == null || c =='')
        {
            document.getElementById("vremePreuzimanja2").classList.add("badForm-border");
        }
        else if(c != null && c != '') 
        {
            document.getElementById("vremePreuzimanja2").classList.add("goodForm-border");
        }
        if(d == null || d =='')
        {
            document.getElementById("vremeVracanja2").classList.add("badForm-border");
        }
        else if(d != null && d != '') 
        {
            document.getElementById("vremeVracanja2").classList.add("goodForm-border");
        }
        if(automobil.value == null || automobil.value =='izaberi')
        {
            document.getElementById("izbor_auta").classList.add("badForm-border");
        }
        else if(automobil.value != null && automobil.value != 'izaberi') 
        {
            document.getElementById("izbor_auta").classList.add("goodForm-border");
        }

        return false;
    }
    else{
        alert("Hvala što koristite naše usluge, vaše vozilo: " + automobil.value + " je rezervisano za vas od " + a + ":" + c + " do " + b + ":" + d);
    }
}
  



// // validacija kontakt forme
// function check(){

//     //validacija imena

//     var kontaktIme = document.getElementById("ime").value;
//     var error = document.getElementById("kontaktIme");
//     if(kontaktIme.length > 10 || kontaktIme.length == "" || kontaktIme == null)
//         {
//             error.innerHTML="Pogrešan unos";
//             kontaktIme.addClass("badForm");
//         }
// }


// if(datum_p_provera != "" && vreme_p_provera != "" && datum_v_provera != "" && vreme_v_provera != "" && datum_p_provera > datePattern && datum_v_provera > datum_p_provera)
// {
//     blok.classList.add("blok-rez-style");
//     blok.innerHTML="<div id='brisanje'><p>Datum preuzimanja: " + datum_p_provera + "</p><p> Vreme preuzimanja: " + vreme_p_provera + "h</p><p> Datum vraćanja: "  + datum_v_provera + "</p><p> Vreme vraćanja: " + vreme_v_provera + "h </p><p><a href='#' id='dugme'>Potvrdi</a></p></div>";
//     document.getElementById("dugme").addEventListener("click",()=>{
//         blok.removeChild(blok.childNodes[0]);
//         blok.classList.remove("blok-rez-style");
//     })
// }