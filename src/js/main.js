const burger = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav__items');
const navItem = document.querySelectorAll('.nav__item');
const headerBTN = document.querySelector('.header__button')
const offersSection = document.querySelector('.offers')

const counterItems = document.querySelectorAll('.statistics__counter')
const counterBox = document.querySelector('.statistics__counter-box')

const sliderBox = document.querySelector('.realizations__slider-box')
const leftSliderBtn = document.querySelector('.realizations__btn--left')
const rightSliderBtn = document.querySelector('.realizations__btn--right')
const sliderItems = document.querySelectorAll('.realizations__slider-item')
const sliderWidth = 50
const sliderSpeed = 5000

let index = 0

const handleSlider = () => {
	
	index++
changeSliderItem()
}

let startSlider = setInterval(handleSlider, sliderSpeed)

const changeSliderItem = () => {
	
	if (index > sliderItems.length - 2) {
		index = 0
	} else if (index < 0) {
		index = sliderItems.length - 2
	} 

	sliderBox.style.transform = `translateX(${-index * sliderWidth}%)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeSliderItem()
	clearInterval(startSlider)
	startSlider = setInterval(handleSlider, sliderSpeed)
}

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
rightSliderBtn.addEventListener('click', handleRightArrow)
leftSliderBtn.addEventListener('click', handleLeftArrow)
