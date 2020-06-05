$(document).ready(function(){
	$('.slider__container').slick({
		arrows:true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		easing:'linear',
		infinite: false,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed: 500,
		draggable:false,
		variableWidth:false,
		responsive:[
			{
				breakpoint: 1920,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 1440,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}

		]
	});
});

//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});


// show subMenu
function showSubMenu() {
	let subMenuList = document.getElementById("subMenuList");
	subMenuList.classList.toggle("showMenu");
}



