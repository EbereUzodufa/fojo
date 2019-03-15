// Global Declares
const btnToggle = document.getElementById('btnMobileToggle');
// const overLayer = document.getElementById('overLayer');
const body = document.body;


// Get current year
const currentYear = () => {
	let d = new Date();
	let year = d.getFullYear();
	document.getElementById('currentYear').innerHTML = year;
}

// Set overlay for THREE.MinEquation
const setOverlay = (value) =>{
	let setValue = value;
	console.log(setValue);
	const overlay = document.querySelector('div.overlay');
	// let eleWidth = '100%'
	// overlay.style.width = '100%';
	if (setValue == true){
		// overlay.style.display = 'none';
		overlay.style.width = '100%';
		overlay.scrollTop = 0;
		body.classList.add('noScroll');
		// console.log('true', overlay);
	} else{
		// overlay.style.display = 'block';
		overlay.style.width = '0%';
		body.classList.remove('noScroll');
		// overLayer.classList.remove('overlay');
		// console.log('false', overlay);
	}
};

// On application start, perform these
const startApp = () => {
	currentYear();
	const iAwesome = document.querySelector('i.fa.fa-bars');
	let giveOverlay = false;
	// console.log(iAwesome);
	btnToggle.addEventListener('click', function() {
		// btn.style.backgroundColor initially returns ''
		if (btnToggle.style.backgroundColor == '' || btnToggle.style.backgroundColor == 'transparent') {
			btnToggle.style.backgroundColor = "#FF473A";
			iAwesome.style.color = '#fff';
			giveOverlay = true;
		} else{
			btnToggle.style.backgroundColor = "transparent";
			iAwesome.style.color = '#000';
			giveOverlay = false;
		}
		setOverlay(giveOverlay);
		// console.log(giveOverlay);
		// console.log('good');
	});
};

startApp();