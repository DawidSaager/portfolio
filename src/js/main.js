const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');
const headerBTN = document.querySelector('.header__button')
const offersSection = document.querySelector('.offers')

const counterItems = document.querySelectorAll('.statistics__counter')
const counterBox = document.querySelector('.statistics__counter-box')


const openNavMobile = () => {
	nav.classList.toggle('nav__items--active');

	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items--active');
		});
	});
};

const clickHeaderBTN = () => {
	window.scrollBy(0, offersSection.offsetTop - window.scrollY)
}

const options = {
	rootMargin: '-150px'
}

const startCounter = entry => {
	console.log(entry[0].isIntersecting);

	if(entry[0].isIntersecting){
		counterItems.forEach(counter => {



			const updateCounter = () => {
				const finalNumber = counter.getAttribute('data-number')
				const value = parseInt(counter.textContent)

				const speed = finalNumber / 10

				if(value < finalNumber){
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 100)
				} else{
					counter.textContent = finalNumber
				}
			}

			updateCounter()


		})
	}
}


const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)

burger.addEventListener('click', openNavMobile);
headerBTN.addEventListener('click', clickHeaderBTN);
