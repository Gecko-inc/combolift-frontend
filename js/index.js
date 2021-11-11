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


//tab services 



const tabText = document.querySelectorAll('.services__text');
const img = document.querySelectorAll('.services__img');
const titles = document.querySelectorAll('.wrapper__title');


function hide() {
    titles.forEach((item) => {
        item.classList.remove('wrapper__title-active');
    })

    tabText.forEach((item) => {
        item.classList.remove('services__text-active');
    })

	img.forEach((item) => {
        item.classList.remove('services__img-active');
    })

}

function show(i = 0) {
    titles[i].classList.add('wrapper__title-active');
}

titles.forEach((item, i) => {
    item.addEventListener('click', () => {
        let tabid = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabid);
		let tabidImg = item.getAttribute('data-img');
        let currentTabImg = document.querySelector(tabidImg);
        hide();
        show(i);
        currentTab.classList.add('services__text-active');
		currentTabImg.classList.add('services__img-active');
		
    })
})

show(1);







const eqtitles = document.querySelectorAll('.equipment__titles');
const eqtabText = document.querySelectorAll('.equipment__text');
const eqimg = document.querySelectorAll('.equipment__img');


function eqhide() {
    eqtitles.forEach((item) => {
        item.classList.remove('equipment__titles-active');
    })

    eqtabText.forEach((item) => {
        item.classList.remove('equipment__text-active');
    })

	eqimg.forEach((item) => {
        item.classList.remove('equipment__img-active');
    })

}



function eqshow(i = 0) {
    eqtitles[i].classList.add('equipment__titles-active');
}

eqtitles.forEach((item, i) => {
    item.addEventListener('click', () => {
        let tabid = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabid);

		let tabidImg = item.getAttribute('eqdata-img');
        let currentTabImg = document.querySelector(tabidImg);
		
        eqhide();
        eqshow(i);

        currentTab.classList.add('equipment__text-active');
		currentTabImg.classList.add('equipment__img-active');
		
    })
})

eqshow(1);


