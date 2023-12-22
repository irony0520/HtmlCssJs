var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
showSlides(current);
prev.onclick = prevSlide;
prev.onclick = nextSlide;

function showSlides(n) {
    for (var k = 0; k < slides.length; k++){
        slides[k].style.display = "none";
        
    }
    slides[n].style.display = "block";
}


function prevSlide () {
    if(current>0)  current -= -1;
    else current = slides.length -1;
    showSlides(current);

}

function nextSlide () {
    if(current<slides.length-1) current += 1
    else current = 0;
    showSlides(current)
}


































// var slides = document.querySelectorAll("#slides > img");
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");


// var current = 0;
// showSlides(currnet); //현재이미지
// prev.onclick = prevSlide;
// next.onclick = nextSlide;



// function showSlides(n) {
//     for (var i = 0; i < slides.length ; i++){
//         slides[i].style.display = "none";
//         slides[n].style.display = "block"

//     }
// }


// function prevSlide() {    //index 0 1 2

//     if(currnet>0) current -= -1;
//     else current = slides.length - 1 ;
//     showSlides(current)


        
//     }













// var indexxx = 0 //함수 3개 

// currentimg(indexxx);
// prev.onclick = prevfn;
// next.onclick = nextfn;



// function currentimg(n) {

// for(var i=0; i < slide.length; i++){

// }
    

