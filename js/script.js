const nav = document.querySelector('.header__nav');
const navHeight = nav.offsetHeight;
const scrollPosition = () => window.pageYOffset;
const containHidden = () => nav.classList.contains('hidden');
let lastScroll = 0;

window.addEventListener('scroll', () => {
	if (window.pageYOffset > navHeight) {
		nav.classList.add('header__nav-active')
	} else {
		nav.classList.remove('header__nav-active')
	}

	if (scrollPosition() > lastScroll && !containHidden()) {
		nav.classList.add('hidden')
	}
	
	if (scrollPosition() < lastScroll && containHidden()) {
		nav.classList.remove('hidden')
	}

	lastScroll = scrollPosition();
})
