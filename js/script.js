window.onload = function() {
	sizes();
	mainSlider();
	mainDecisions();
	scroll();
}
function sizes() {
	document.querySelector('.header .empt').style.height=parseInt(document.querySelector('.header .main-header').offsetHeight)+'px';
	document.querySelector('.header .sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.header').offsetHeight)+'px';
	document.querySelector('.slider-section').style.height=parseInt(window.innerHeight - document.querySelector('.header').offsetHeight)+'px';
}
if(document.querySelector('.geo-search')) {
	document.querySelector('.geo-search').onclick = function() {
		document.querySelector('.geo-bg').classList.add('active');
		document.querySelector('.geo-map').classList.add('active');
		setTimeout(function(){
			document.querySelector('.geo-bg').classList.add('op');
			document.querySelector('.geo-map').classList.add('op');
		},200)
	}
	document.querySelector('.geo-bg').onclick = function() {
		document.querySelector('.geo-bg').classList.remove('op');
		document.querySelector('.geo-map').classList.remove('op');
		setTimeout(function(){
			document.querySelector('.geo-bg').classList.remove('active');
			document.querySelector('.geo-map').classList.remove('active');
		},200)
	}
}
if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	let sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	let sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
		}else{
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
		}
	}
}

function mainSlider() {
	if (document.querySelector('.slider-section')) {
		wrap = document.querySelector('.slider-section .wrap');
		imgs = document.querySelectorAll('.slider-section .wrap li');
		setTimeout(function(){
			imgs[0].classList.add('active');
		},600)
		sl = setInterval(function(){
			if(wrap.style.left=='0px') {
				wrap.style.left='-100vw';
				imgs[0].classList.remove('active');
				imgs[2].classList.remove('active');
				setTimeout(function(){
					imgs[1].classList.add('active');
				},900)
			}
			else if(wrap.style.left=='-100vw') {
				wrap.style.left='-200vw';
				imgs[1].classList.remove('active');
				imgs[0].classList.remove('active');
				setTimeout(function(){
					imgs[2].classList.add('active');
				},900)
			}
			else if(wrap.style.left=='-200vw') {
				wrap.style.left='0px';
				imgs[1].classList.remove('active');
				imgs[2].classList.remove('active');
				setTimeout(function(){
					imgs[0].classList.add('active');
				},900)
			}
		},10000);
	}
}
function mainDecisions() {
	if(document.body.clientWidth>1024) {
		if(document.querySelector('section.decision')) {
			items = document.querySelectorAll('.decision .item');
			lays = document.querySelectorAll('.decision .lay');
			items[0].onmouseover = function(a){
				for(k=0;k<items.length;k++) {
					items[k].classList.add('inactive');
				}
				lays[0].classList.add('active')
				items[0].classList.add('op')
			}
			items[0].onmouseout = function(){
				for(k=0;k<items.length;k++) {
					items[k].classList.remove('inactive');
				}
				lays[0].classList.remove('active');
				items[0].classList.remove('op')

			}
			items[1].onmouseover = function(a){
				for(k=0;k<items.length;k++) {
					items[k].classList.add('inactive');
				}
				lays[1].classList.add('active');
				items[1].classList.add('op')

			}
			items[1].onmouseout = function(){
				for(k=0;k<items.length;k++) {
					items[k].classList.remove('inactive');
				}
				lays[1].classList.remove('active');
				items[1].classList.remove('op')
			}
			items[2].onmouseover = function(a){
				for(k=0;k<items.length;k++) {
					items[k].classList.add('inactive');
				}
				lays[2].classList.add('active')
				items[2].classList.add('op')
			}
			items[2].onmouseout = function(){
				for(k=0;k<items.length;k++) {
					items[k].classList.remove('inactive');
				}
				items[2].classList.remove('op')
				lays[2].classList.remove('active');
			}
			items[3].onmouseover = function(a){
				for(k=0;k<items.length;k++) {
					items[k].classList.add('inactive');
				}
				items[3].classList.add('op');
				lays[3].classList.add('active')
			}
			items[3].onmouseout = function(){
				for(k=0;k<items.length;k++) {
					items[k].classList.remove('inactive');
				}
				lays[3].classList.remove('active');
				items[3].classList.remove('op')

			}
		}
	}
}
function scroll() {
	scroll = document.body.scrollTop;
	window.addEventListener('scroll', function() {
		scroll = window.pageYOffset || document.documentElement.scroll;

		scr = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.main-header').classList.add('fixed') : document.querySelector('.main-header').classList.remove('fixed');
		scrt = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.header .sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.main-header').offsetHeight)+'px' : document.querySelector('.header .sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.header').offsetHeight)+'px';
		sandOp = scroll > 50 ? document.querySelector('.sandwich-right-bar .nav-toggle').classList.add('op') : document.querySelector('.sandwich-right-bar .nav-toggle').classList.remove('op');
	});
}