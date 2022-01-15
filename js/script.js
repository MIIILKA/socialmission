window.addEventListener("scroll", function(event){
  let animated = document.querySelector('.animated'),
      diagram = document.querySelector(".diagram"),
      animatedOptions = animated.getBoundingClientRect();
  
  if (animatedOptions.top - window.innerHeight + animatedOptions.height <= 0) {
    diagram.classList.add("show");
  } else {
    diagram.classList.remove("show");
  }
});






$(document).on('mousemove', function(e){
        var eye_x = $('.eye').offset().left - $('.eye').width()/2;
        var eye_y = $('.eye').offset().top - $('.eye').height()/2;
    
        var theta = (Math.atan2((e.pageY - eye_y),(e.pageX - eye_x)) *(180/Math.PI))+85;
        var mousex_constrained = constrain(e.pageX); 
        var mousey_constrained = constrain(e.pageY); 
        var transformString = "rotateZ("+theta+"deg)" + " translateX("+mousex_constrained+"px)" + " translateY("+mousey_constrained+"px)";
        
        $('.eye').css("transform", transformString);

        console.log(transformString);
     });

     function constrain (n) {
         return -n/150;
     }



let items = document.querySelectorAll(".parallax .layer");
let parallax = document.querySelector(".parallax");
let centerX = parallax.offsetWidth / 2;
let centerY = parallax.offsetHeight / 2;

document.body.onmousemove = function (event) {
	for (let i = 0; i < items.length; i++) {
		items[i].setAttribute("style", "transform: translate3d(" +
			Math.round((centerX - event.pageX) / (10 + i * 3)) + "px, " +
			Math.round((centerY - event.pageY) / (10 + i * 3)) + "px, 0);"
		);
	}
};







$('.bubles__container').draggable();



function updateIconSizes(){
	let centreX = $('.bubles__wrapper')[0].getBoundingClientRect().x  + $('.bubles__wrapper')[0].offsetWidth / 2;
	let centreY = $('.bubles__wrapper')[0].getBoundingClientRect().x  + $('.bubles__wrapper')[0].offsetHeight / 2;
	
	let icons = document.querySelectorAll(".bubles__item");
	for(let icon of icons){
		let iconX = icon.getBoundingClientRect().x + icon.getBoundingClientRect().width / 2;
		let iconY = icon.getBoundingClientRect().y + icon.getBoundingClientRect().height / 2;

		let distance = Math.sqrt((iconX - centreX)**2 + (iconY - centreY)**2);     

		let percent = Math.min((0.7 - distance / centreX) * 2.4, 1)

		console.log(distance)

		icon.style.transform = `scale(${percent})`;
	}
}

setInterval(() => {
	updateIconSizes();
}, 20);





function icon__color() {

}













let diagram = document.querySelector(".diagram");
setTimeout(() => {
	diagram.classList.add("show");
}, 1500);













document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
  new SimpleAdaptiveSlider('.slider', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // инициализация 1 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-1', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
  // инициализация 2 слайдера с нужными настройками
  new SimpleAdaptiveSlider('#slider-2', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});

















var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });