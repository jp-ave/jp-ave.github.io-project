const primaryNav = document.querySelector(".container-mobile-menu");
const navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else{
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

        // end of navigation


const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn-right');
const prevButton = document.querySelector('.btn-left');
const dotNav = document.querySelector('.carousel_nav')
const dots = Array.from(dotNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;


//console.log(slideWidth);

// arrange the image next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// to simplify this use for loop

// slides.forEach((slide, index) => {
//	 slide.style.left = slideWidth * index + 'px';
// });

// to be easy to understand this loop try using a function
const setSlidePostion = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePostion);


const moveToSlide = (track, currentSlide, targetSlide) =>{
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
	currentDot.classList.remove('current-slide');
	targetDot.classList.add('current-slide');
};

const hideShowNav = (slides, prevButton, nextButton, targetIndex) => {
	if (targetIndex === 0){
		prevButton.classList.add('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
	else if (targetIndex === slides.length - 1){
		prevButton.classList.remove('is-hidden');
		nextButton.classList.add('is-hidden');
	}
	else{
		prevButton.classList.remove('is-hidden');
		nextButton.classList.remove('is-hidden');
	}
};

// when i click right, move  slides to the right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;
	const currentDot = dotNav.querySelector('.current-slide');
	const nextDot = currentDot.nextElementSibling;
	const nextIndex = slides.findIndex(slide => slide === nextSlide);

	// move to the next slide
	moveToSlide(track, currentSlide, nextSlide);
	updateDots(currentDot, nextDot);
	hideShowNav(slides, prevButton, nextButton, nextIndex);
});
// when i click left, move  slides to the left
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;
	const currentDot = dotNav.querySelector('.current-slide');
	const prevDot = currentDot.previousElementSibling;
	const prevIndex = slides.findIndex(slide => slide === prevSlide);

	// move to the next slide
	moveToSlide(track, currentSlide, prevSlide);
	updateDots(currentDot, prevDot);
	hideShowNav(slides, prevButton, nextButton, prevIndex);

});

//when i click nav indicators, move to that slide
dotNav.addEventListener('click', e => {
	// what indicator was clicked on
	const targetDot = e.target.closest('button');

	if(!targetDot) return;

	const currentSlide = track.querySelector('.current-slide');
	const currentDot = dotNav.querySelector('.current-slide');
	const targetIndex = dots.findIndex(dot => dot === targetDot);
	const targetSlide = slides[targetIndex];


	moveToSlide(track, currentSlide, targetSlide);
	updateDots(currentDot, targetDot);
	hideShowNav(slides, prevButton, nextButton, targetIndex);

	
;});

	// EVENTS

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');
console.log(tabs, tabContents);

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent => {
			tabContent.classList.remove('active')
		});
		tabs.forEach(tab => {
			tab.classList.remove('active')
		});
		tab.classList.add('active');
		target.classList.add('active');
	})
})

	//news
const newsTabs = document.querySelectorAll('[data-news-target]');
const newsContents = document.querySelectorAll('[data-news-content');
console.log(tabs, tabContents);


newsTabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.newsTarget);
		newsContents.forEach(tabContent => {
			tabContent.classList.remove('active')
		});
		newsTabs.forEach(tab => {
			tab.classList.remove('active')
		});
		tab.classList.add('active');
		target.classList.add('active');
	})
})