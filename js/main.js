var i = 0;
var images = [];
var time = 3000;

images[0] = 'assets/img/img1.jpg';
images[1] = 'assets/img/img2.jpg';
images[2] = 'assets/img/img3.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}
window.onload = changeImg;

window.addEventListener('scroll', function(){
    let navbar = this.document.querySelector('nav');
    if(window.pageYOffset > 60){
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

function kontakt(){
    var klik = document.getElementById('klik1');
    if(klik.click){
      document.getElementById('kontakt').style.display ='flex';
    }
    if(klik.click){
      document.getElementById('lokacija').style.display ='none';
    }
  }
function lokacija(){
    var klik = document.getElementById('klik2');
    if(klik.click){
      document.getElementById('kontakt').style.display='none';
    }
    if(klik.click){
      document.getElementById('lokacija').style.display='block';
    }
  }