const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');
const headerBTN = document.querySelector('.header__button')
const aboutSection = document.querySelector('.about')

const openNavMobile = () => {
	nav.classList.toggle('nav__items--active');

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active');
		});
	});
};

const clickHeaderBTN = () => {
	window.scrollBy(0, aboutSection.offsetTop - window.scrollY)
}


burger.addEventListener('click', openNavMobile);
headerBTN.addEventListener('click', clickHeaderBTN);
