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
        alert("Molim vas, popunite sva polja!");
        
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
        alert("Hvala što koristite naše usluge, vaše vozilo: " + automobil.value + " je rezervisano za vas od " + a + " do " + b);
    }
}
  
function skodaFIzbor(){
    document.getElementById("izbor_auta").value = "Škoda Fabia 1.2 HTP";
}
function peugeotIzbor(){
    document.getElementById("izbor_auta").value = "Peugeot 308 1.6 HDI";
}
function golfIzbor(){
    document.getElementById("izbor_auta").value = "Golf VII DSG";
}
function skodaRIzbor(){
    document.getElementById("izbor_auta").value = "Škoda Rapid 2016";
}
function mercedesIzbor(){
    document.getElementById("izbor_auta").value = "Mercedes class A";
}
function golfVIzbor(){
    document.getElementById("izbor_auta").value = "Golf VII Karavan";
}
function renaultIzbor(){
    document.getElementById("izbor_auta").value = "Renault Clio";
}
function skodaOIzbor(){
    document.getElementById("izbor_auta").value = "Škoda OKtavia";
}


// Validacija kontakt forme
function check(){

    var ime_ = document.getElementById("ime_");
    var prezime_ = document.getElementById("prezime_");
    var email_ = document.getElementById("email_");
    var poruka_ = document.getElementById("poruka_");

    var Text = /^[a-zA-z]+$/;
    var Email = /^[a-zA-z\-0-9]+\@[a-zA-z]+\.[a-z]{2,3}$/; 

    if(ime_.value == null || ime_.value == "" || prezime_.value == null || prezime_.value == "" || email_.value == null || email_.value == "" || poruka_.value == null || poruka_.value == "")
    {
        alert("Molim vas, popunite sva polja!");
        
        if(!ime_.value.match(Text)){
            ime_.classList.add('badForm-border');
            ime_.value = "";
        }else{
            ime_.classList.add('goodForm-border');
        }
        if(!prezime_.value.match(Text)){
            prezime_.classList.add('badForm-border');
            prezime_.value = "";
        }else{
            prezime_.classList.add('goodForm-border');
        }
        if(!email_.value.match(Email)){
            email_.classList.add('badForm-border');
            email_.value = "";
        }else{
            email_.classList.add('goodForm-border');
        }
        if(poruka_.value == null || poruka_.value == ""){
            poruka_.classList.add('badForm-border');
            poruka_.value = "";
        }else{
            poruka_.classList.add('goodForm-border');
        }
        return false;
    }
    else{
        var poruka = document.getElementById("poruka");
        poruka.innerHTML = "<p>Poruka uspešno poslata!</p>";
        poruka.classList.add('porukaStyle');
            ime_.value = "";
            ime_.classList.add('goodForm-border');
            prezime_.value = "";
            prezime_.classList.add('goodForm-border');
            email_.value = "";
            email_.classList.add('goodForm-border');
            poruka_.value = "";
            poruka_.classList.add('goodForm-border');
        document.getElementById("box").classList.add("goodForm-border");
        return false;
    }
}
