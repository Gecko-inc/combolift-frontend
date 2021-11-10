// Служебные переменные
const d = document;
const body = d.querySelector('body');



//<------Служебные функции---------->

// 1) Сокращенный аналог querySelector
function find(selector) {
	return d.querySelector(selector)
}

// 2) Сокращенный аналог querySelectorAll
function findAll(selectors) {
	return d.querySelectorAll(selectors)
}

// 3) Скрипт запрещающий скроллить тело страницы
function bodyLock() {  
	if (body.classList.contains('_lock')) {
	  	body.classList.remove('_lock');
	} else {
	  	body.classList.add('_lock');
	}
}


//<------Основные функции---------->

// 4) Ленивая загрузка изображений
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
	img.removeAttribute('data-src');
	};
});

// 5) Скрипт для раздела FAQ - "Частозадаваемые вопросы"
function findFaq(){
	let faqBoxes = document.querySelectorAll('.faqBox')
	for(i = 0; i <= faqBoxes.length-1; i++){
		faqBoxes[i].addEventListener('click', function(e) {
			e.preventDefault();
			if(this.classList.contains('active')){
				this.classList.remove('active');
			}else{
				let activeElem = this.closest('.faq').querySelector('.faq-box.active');
				if(activeElem){
					activeElem.classList.remove('active');
				}
				this.classList.add('active');
			}
		});
	}
}
findFaq();

// 9) AOS анимации инициализация (https://michalsnik.github.io/aos/)
//AOS.init();



// Скролл для кнопки

$('[data-scroll]').on('click', function() {
	let blockId = $(this).data('scroll');
	let blockOffset = $(blockId).offset().top;

	$("html, body").scrollTop(blockOffset)
})


// Таб для раздела questions

const tabs = document.querySelectorAll('.questions__item'),
	tabContent = document.querySelectorAll('.questions__answer'),
	tabParent = document.querySelectorAll('.questions__content'),
	dagger = document.querySelectorAll('.questions__dagger');


function hideContent() {
	tabContent.forEach((item) => {
		item.classList.remove('questions__answer-active');
	});
	tabs.forEach((item) => {
		item.classList.remove('questions__item-active');
	});
}

function showContent(i = 0) {
	tabContent[i].classList.add('questions__answer-active');
    tabs[i].classList.add('questions__item-active');
}

/*tabParent.forEach((item) => {
	item.addEventListener('click', (e) => {
		const target = e.target;
		if (target && target.classList.contains('questions__item')) {
			tabs.forEach((item, i) => {
				if (item === target) {
                    hideContent();
					showContent(i);
                }
			})	
		}
	})
})
*/
tabs.forEach((item, i) => {
	item.addEventListener('click', (e) => {
		hideContent();
		showContent(i);
	})
})
hideContent();
showContent();


// Фиксируем шапку
function onScrollHeader(nav, navfixed) { 
  
	const header = document.querySelector(nav);
	const intro = document.querySelector('.intro');
	let introH = intro.clientHeight;
  
	let prevScroll = window.pageYOffset 
	let currentScroll 
  
	window.addEventListener('scroll', () => { 
  
	currentScroll = window.pageYOffset 
	if (currentScroll > introH) {
		const headerHidden = () => header.classList.contains(navfixed) 
  
		if (currentScroll > prevScroll && !headerHidden()) {
			header.classList.add(navfixed)
		}
		if (currentScroll < prevScroll && headerHidden()) {
			header.classList.remove(navfixed)
		}
	  
		prevScroll = currentScroll
	}
	})
  
}
onScrollHeader('.nav', 'nav-fixed');
onScrollHeader('.burger', 'nav-burger-fixed');

// Отображаем адпативное меню
const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const link = document.querySelectorAll('.nav__link');


burger.addEventListener("click",(e) => {

	header.classList.toggle('header-active');
	body.classList.toggle('hidden');
});

link.forEach((item) => {
	item.addEventListener('click', () =>{
		header.classList.remove('header-active')
		body.classList.remove('hidden');
	})
})

