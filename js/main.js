let vreme = ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
let nizHref = ["#","#naslov1","#usloviZakupa","#kontakt1","assets/pages/vozila.html","https://djordje1620.github.io/portfolio.github.io/portfolio/","dokumentacijaN.pdf"];
let nizTekst = ["Početna","O nama","Uslovi zakupa","Kontakt","Vozila","Autor","Dokumentacija"];
let nizMeniKlase = ["activ icon1", "icon1", "icon1", "icon1", "icon1"];
let oNama = ["Želite da rentirate novo i pouzdano rent a car vozilo?","Na pravom ste mestu. Rent a car Beograd uspešno posluje više od 15 godina. Svoje poslovanje usmerili smo na pružanje kvalitetnih usluga rentiranja vozila, po najnižim cenama. Uz profesionalni pristup i poštovanje vaših želja, pomoći ćemo vam da veoma brzo i lako pronađete pravi automobil za svoje potrebe. Nudimo širok izbor novih, udobnih i bezbednih automobila koje možete iznajmiti u centru ili bilo kom drugom delu Beograda. Rent a car vozilo dovozimo na vašu adresu."," Sva naša rent a car vozila su kasko osigurana, pa ne postoji rizik od potencijalne štete.","Bezbednost i zadovoljstvo klijenata su nam uvek na prvom mestu i to je ono što vas uvek vraća na našu adresu.","Za rentiranje vozila na duži vremenski period nudimo specijalne uslove i popuste. Plaćanje rent a car usluga vrši se gotovinom ili kreditnom karticom.","Godine poslovanja sa zadovoljnim klijentima,kako domaćim, tako i stranim su naša najbolja preporuka.","Rezervišite rent a car već danas. Pozovite nas odmah na: <span class='clr-blck'>+38169 37 63 31</span>"];
let zastoMi = ["Preuzimanje vozila na aerodromu","Isporuka vozila na vašoj adresi","Bez depozita","Zeleni karton","Navigacija","Zimske gume i lanci","Neograničena kilometraža"];
let nizIkonice = ["fas fa-car","fas fa-map-marked","fas fa-hand-holding-medical","fas fa-route"];
let nizNazivIkonica = ["Nova vozila","Visok nivo opreme","Osigurana vozila","Dostava 24/7"];
let kontakt = ` `;

let ikoniceFuter = ["fab fa-cc-mastercard","fab fa-cc-visa","fab fa-cc-diners-club","fab fa-cc-paypal","fab fa-instagram","fab fa-facebook","fab fa-twitter","fas fa-sitemap"];
let ikoniceHref = ["#","#","#","#","https://www.instagram.com/","https://www.facebook.com/","https://twitter.com/","sitemap.xml"];
let infFuter = ["Rent a Car Beograd", "Bulevar kralja Aleksandra 334, Beograd", "Beograd 11000, Srbija", "0654346611", "Radno vreme:", "Pon – Pet: 08:00 – 19:00", "Sub: 08:00 – 12:00", "Informacije:", "Svaki dan od 08:00 – 19:00"];


//vozlila
let nazivVozila = ["Škoda Fabia 1.2 HTP","Peugeot 308 1.6 HDI","Golf VII DSG","Škoda Rapid 2016","Mercedes class A","Golf VII Karavan","Renault Clio","Škoda Oktavia"];
let imgVozila = ["skoda.jpg","peugeot.jpg","golf.jpg","skoda-rapid7.jpg","mercedes.jpg","golf_karavan.jpg","reno_clio.jpg","skoda-octavia.jpg"];
let menjacVozila = ["manual","manual","automatic","manual","manual","manual","manual","manual"];
let gorivoVozila = ["benzin","dizel","dizel","benzin","dizel","dizel","dizel","dizel"];
let mestaVozila = ["4","5","5","5","4","5","4","5"];
let klVozila = ["A/C","A/C","A/C","A/C","A/C","A/C","A/C","A/C"];
let gpVozila = ["315l","300l","315l","550l/1.490l","315l","605l","300l","610l/1.740l"];

window.addEventListener('scroll', function() {  

    var nav = document.getElementById("stickyMenu");
    
    if (window.scrollY > 1) {
        nav.className = 'sticky';
    } 
    else {
        nav.className = '';  
    }
  });

  let url = window.location.pathname;

window.addEventListener('load', (event) => {
    //index.html
    if(url == "/rentacar/index.html" || url == "/rentacar/"){

        var meni = "<ul>";
        for(n in nizTekst){
            if(nizTekst[n]=="Autor"){
                meni+=`<li>
                        <a href="${nizHref[n]}" target="_blank">${nizTekst[n]}</a>
                    </li>`
            }
            else{meni+=`
                <li>
                    <a href="${nizHref[n]}" class="${nizMeniKlase[n]}">${nizTekst[n]}</a>
                </li>`;
            }
            }
            meni += "</ul>";
            document.getElementById("meni").innerHTML = meni;

        var ispis = "";
        document.getElementById("klik1").addEventListener("click", function(){
        });
    
        document.getElementById("klik2").addEventListener("click", function(){
            document.getElementById("kontakt").innerHTML = ` <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.374616255452!2d20.500732115497712!3d44.79355357909875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083dbd4577f%3A0x6ea45b642f53f139!2z0JHRg9C70LXQstCw0YAg0LrRgNCw0ZnQsCDQkNC70LXQutGB0LDQvdC00YDQsCAzMzQsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1606257710601!5m2!1ssr!2srs" width="100%" height="550" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
        })
    
        fillTime("vremePreuzimanja","vremePreuzimanja","v_p");
        fillTime("vremeVracanja","vremeVracanja","v_v");
        fillDate("Datum_Preuzimanja","Datum_Preuzimanja","d_p");
        fillDate("Datum_Vracanja","Datum_Vracanja","d_v");
        document.getElementById("izborV").addEventListener('click',function(){
            datumP = document.getElementById("d_p").value;
            datumV = document.getElementById("d_v").value;

            localStorage.setItem("datumPreuzimanja", datumP);
            localStorage.setItem("datumVracanja", datumV);
            selectValue("v_p","vrPreuz");
            selectValue("v_v","vrVrac");

        });
        
        for(o in oNama){
            ispis+=`<p>${oNama[o]}</p>`;
        }
        document.getElementById("oNama").innerHTML +=ispis;
        document.getElementById("prikazKorisnika").innerHTML = `<img src="assets/img/img4.jpg" alt="slika kao prikaz korisnika">`;
        
        ispis = "<ul>";
        for(z in zastoMi){
            ispis+=`<li><i class="far fa-check-square"></i>${zastoMi[z]}</li>`;
               
        }
        ispis+=` </ul>
        <a href="assets/pages/vozila.html#rezervacija_" class="btn">REZERVIŠITE <i class="fas fa-arrow-right"></i></a>`;
        document.getElementById("zastoMi").innerHTML +=ispis;
        
        ispis = "";
        for(i in nizIkonice){
            ispis += `
                <div class="main-2 main-flex_1">
                    <div class="main-circle main-circle-color main-flex_1">
                        <i class="${nizIkonice[i]}"></i>
                    </div>
                    <p>${nizNazivIkonica[i]}</p>
                </div>`;
        }
        document.getElementById("usloviZakupa").innerHTML = ispis;
        

        document.getElementById("btnPosalji").addEventListener('click',function(){
            
            var ime = document.getElementById("ime_").value
            var prezime = document.getElementById("prezime_").value;
            var message = document.getElementById("poruka_").value;
            var email = document.getElementById("email_").value;

            if(ime != "" && prezime != "" && message != "" && email != ""){
                if(nameValidate("ime_") && nameValidate("prezime_") && emailValidate("email_") && messageValidate("poruka_")){
                    document.getElementById("ispisPoruke").innerText="Uspesno ste poslali poruku!";
                    document.getElementById("ispisPoruke").classList.add("pozadinaIspisPoruke");
                document.getElementById("ispisPoruke").classList.remove("pozadinaIspisPorukeErr");

                }
                else{
                    document.getElementById("ispisPoruke").innerText="";
                    document.getElementById("ispisPoruke").classList.remove("pozadinaIspisPoruke");
                }
            }
            else{
                document.getElementById("ispisPoruke").innerText="Morate popuniti sva polja!";
                document.getElementById("ispisPoruke").classList.add("pozadinaIspisPoruke");
                document.getElementById("ispisPoruke").classList.add("pozadinaIspisPorukeErr");

            }
        }); 
        
    }
    
//index.html || vozila.html
    ispis=`<p class="clr-siz-p">Rent a car Beograd možete platiti gotovinom ili elektronskim karticama</p><p>`;
        for(ik in ikoniceFuter){
            ispis+= `<a href="${ikoniceHref[ik]}"> <i class="${ikoniceFuter[ik]}"></i></a>`;
        }
        if(url == "/rentacar/index.html"){
            ispis+= `</p><p>Rent a car pruža iznajmljivanje pouzadnih vozila poznatih svetskih proizvođača uz najbolji odnos cena – kvalitet.</p><a href="assets/pages/vozila.html#rezervacija_" class="btn">Rezervišite <i class="fas fa-arrow-right"></i></a>`;
        }
        else{
            ispis+= `</p><p>Rent a car pruža iznajmljivanje pouzadnih vozila poznatih svetskih proizvođača uz najbolji odnos cena – kvalitet.</p><a href="#rezervacija_" class="btn">Rezervišite <i class="fas fa-arrow-right"></i></a>`;
        }
        document.getElementById("ikoniceFuter").innerHTML = ispis;
    
        ispis=`<h4>Kontakt</h4>`;
        for(iF in infFuter){
            ispis+=`<p class="p-main-1">${infFuter[iF]}</p>`;
        }
        document.getElementById("infFuter").innerHTML = ispis; 
    
    console.log(url);
    //vozila.html
    if(url == "/rentacar/assets/pages/vozila.html"){
        var meni = "<ul>";
        for(n in nizTekst){
            if(nizTekst[n]=="Autor"){
                meni+=`<li>
                        <a href="${nizHref[n]}" target="_blank">${nizTekst[n]}</a>
                    </li>`
            }
            else{
                if(nizTekst[n]=="Dokumentacija"){
                    meni+=`<li>
                            <a href="../../${nizHref[n]}" class="${nizMeniKlase[n]}">${nizTekst[n]}</a>
                            </li> `;
                }
                else if(nizTekst[n]== "Vozila"){
                    meni+=`  
                            <li>
                            <a href="#" class="${nizMeniKlase[n]}">${nizTekst[n]}</a>
                            </li> `;
                }else{
                    meni+=`            
                    <li>
                        <a href="../../index.html${nizHref[n]}" class="${nizMeniKlase[n]}">${nizTekst[n]}</a>
                    </li>`;
                }
            }
            
            }
            meni += "</ul>";
            document.getElementById("meni").innerHTML = meni;

        var vozila = document.getElementById("voz");
        var ispisVozila = "";
        for(v in imgVozila){
            ispisVozila+=`
                <div class="voz-blok">
                        <img src="../img/${imgVozila[v]}" alt="Škoda Fabia">
                        <h4>${nazivVozila[v]}</h4>
                        <div class="main-red">
                            <div class="main-kolona">
                                <i class="fas fa-cogs"></i>
                                <p>${menjacVozila[v]}</p>
                            </div>
                            <div class="main-kolona">
                                <i class="fas fa-gas-pump"></i>
                                <p>${gorivoVozila[v]}</p>
                            </div>
                            <div class="main-kolona">
                                <i class="fas fa-user-alt"></i>
                                <p>${mestaVozila[v]}</p>
                            </div>
                            <div class="main-kolona">
                                <i class="far fa-snowflake"></i>
                                <p>${klVozila[v]}</p>
                            </div>
                            <div class="main-kolona">
                                <i class="fas fa-suitcase"></i>
                                <p>${gpVozila[v]}</p>
                            </div>
                        </div>
                        <a href="#rezervacija_" class="btn" onclick="izborVozila(${v});">Rezervišite</i></a>
                    </div>`;
        }
        vozila.innerHTML = ispisVozila;


        var slider = document.getElementById("slider");
        var ispisSlider = "";
        for(imgVozilo in imgVozila){
            ispisSlider += `<img src="../img/${imgVozila[imgVozilo]}" class="img" alt="slika ausaobila (mercedes s klasa)">`;
        }
        slider.innerHTML = ispisSlider;
        var i=0;
        const images = document.querySelectorAll(".img");
        images[i].style.display = 'block';
        setInterval(function(){ 
            images.forEach( (img, i) => {
            img.style.display = 'none';
            })
            if( i == images.length) {
                i = 0; 
                }
                images[i].style.display = 'block';
                i++;
        }, 3000);

        ispisVozila = `<select name="izbor_auta" id="izbor_auta" onblur="selectValidate('izbor_auta')">
        <option value="Izaberi" selected>Izaberi</option>`;
        for(v in nazivVozila){
        ispisVozila +=`<option value="${v}">${nazivVozila[v]}</option>`;
        }
        ispisVozila+= `</select>`;
        document.getElementById("vozIspis").innerHTML = ispisVozila;

        fillTime("vremePr","vremePr","v_P");
        fillTime("vremeVr","vremeVr","v_V");
        fillDate("datumPr","datumPr","dPreuzimanja");
        fillDate("datumVr","datumVr","dVracanja");

        if(localStorage.getItem("datumPreuzimanja")!=null){
            document.getElementById("dPreuzimanja").value = localStorage.getItem("datumPreuzimanja");
            document.getElementById("dVracanja").value = localStorage.getItem("datumVracanja");
            document.getElementById("v_P").value = localStorage.getItem("vrPreuz");
            document.getElementById("v_V").value = localStorage.getItem("vrVrac");
        }
     
    }
    localStorage.removeItem("datumPreuzimanja");
    localStorage.removeItem("datumVracanja");
    localStorage.removeItem("vrPreuz");
    localStorage.removeItem("vrVrac");




    document.getElementById("rez").addEventListener('click',function(){

        var imeV = document.getElementById("imeR").value
        var emailV = document.getElementById("emailVozila").value;
        var locPr = document.getElementById("lokR");
        var locVr = document.getElementById("lokV");
        var izabranoV = document.getElementById("izbor_auta").value;
        var datumOd = document.getElementById("dPreuzimanja").value;
        var datumDo = document.getElementById("dVracanja").value;
        const date = new Date();


        if(imeV != "" && emailV != "" && locPr.value != "Izaberi" && locVr.value != "Izaberi" && izabranoV != "Izaberi"){
            if(nameValidate("imeR") && emailValidate("emailVozila") && datumOd<datumDo){
                var vozilo = "";
                console.log(izabranoV);
                switch(izabranoV) {
                      case "0": 
                        vozilo = "Škodu Fabiu";
                      break;
                        case "1":
                        vozilo="Peugeot 308";
                      break;
                      case "2":
                        vozilo="Golf VII";
                      break;
                      case "3":
                        vozilo="Škodu Rapid";
                      break;
                      case "4":
                        vozilo="Mercedesa";
                      break;
                      case "5":
                        vozilo="Golfa VII karvana";
                      break;
                      case "6":
                        vozilo="Renault Clio";
                      break;
                      case "7":
                        vozilo="Škodu Oktaviu";
                      break;
                  }
                document.getElementById("ispisP").innerText=`Poštovani/a ${imeV} uspešno ste rezervisali ${vozilo} od ${datumOd} do ${datumDo}`;
                document.getElementById("ispisP").classList.remove("pozadinaIspisPorukeErr");
                document.getElementById("ispisP").classList.add("pozadinaIspisPoruke");

            }
            else{
                document.getElementById("ispisP").innerText="Morate uneti datum koji je nakon datuma preuzimanja vozila";
                document.getElementById("ispisP").classList.remove("pozadinaIspisPoruke");
                document.getElementById("ispisP").classList.add("pozadinaIspisPorukeErr");
            }
        }else
        {
                document.getElementById("ispisP").innerText="Morate popuniti sva polja!";
                document.getElementById("ispisP").classList.add("pozadinaIspisPorukeErr");
        }

    });





  });
function izborVozila(i){
    document.getElementById("izbor_auta").value = i;
}
function fillTime(IDfield, name, id){

    var idField = document.getElementById(IDfield);
    let ispis = "<select name=" + name + " id=" + id + ">";

    for(var i=0; i < vreme.length; i++){
        if(vreme[i]== "09:00"){
            ispis += `<option value="${vreme[i]}" selected> ${vreme[i]} </option>`;
        }else{
            ispis += `<option value="${vreme[i]}"> ${vreme[i]} </option>`;
        }
    }
    ispis += "</select>";
    idField.innerHTML = ispis;
}

function fillDate(ID,name,idDate){
    var dateId = document.getElementById(ID);
    let ispis = " <input type='date' name='" +name + "' id='" + idDate + "' />";
    dateId.innerHTML = ispis;
    fill(idDate);
}
function fill(idDate){
    var input = document.getElementById(idDate);
    input.valueAsDate = new Date();
}
function selectValue(id,name) {
      var valueVr = document.getElementById(id).value;
      localStorage.setItem(name, valueVr);
}
function nameValidate(inputName) {
    var ime = document.getElementById(inputName);
    var erIme = new RegExp(/^[A-ZČĆŽŠĐ][a-z]{1,20}$/);

    if(erIme.test(ime.value)){
        ime.classList.remove("err");
        ime.classList.add("succes");
        return true;
    }else{
        ime.classList.remove("succes");
        ime.classList.add("err");
        return false;
    }
}
function emailValidate(inputEmail) {
    var email = document.getElementById(inputEmail);
    var erEmail = new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2-8})?$/);

    if(erEmail.test(email.value)){
        email.classList.remove("err");
        email.classList.add("succes");
        return true;
    }else{
        email.classList.remove("succes");
        email.classList.add("err");
        return false;
    }
}
function messageValidate(){
    var message = document.getElementById("poruka_");
    var tekst = document.getElementById("greska");

    if(message.value.length > 50){
        message.classList.remove("err");
        message.classList.add("succes");
        tekst.innerHTML= "";
        return true;
    }
    else{
        message.classList.remove("succes");
        tekst.innerHTML= "Broj karaktera mora biti veci od 50";
        message.classList.add("err");
        return false;
    }
}
function selectValidate(selectLocation){
    var sel = document.getElementById(selectLocation);
    if(sel.value == "Izaberi"){
        sel.classList.remove("succes");
        sel.classList.add("err");
        return false;
    }else{
        sel.classList.remove("err");
        sel.classList.add("succes");
        return true;
    }
}
