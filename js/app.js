// Get current year
const currentYear = () => {
	let d = new Date();
	let year = d.getFullYear();
	document.getElementById('currentYear').innerHTML = year;
}

// On application start, perform these
const startApp = () => {
	currentYear();
	const btn = document.getElementById('btnMobileToggle');
	const iAwesome = document.querySelector('i.fa.fa-bars');
	// console.log(iAwesome);
	const body = document.body;
	btn.addEventListener('click', function() {
		// btn.style.backgroundColor initially returns ''
		if (btn.style.backgroundColor == '' || btn.style.backgroundColor == 'transparent') {
			btn.style.backgroundColor = "#FF473A";
			iAwesome.style.color = '#fff';
		} else{
			btn.style.backgroundColor = "transparent";
			iAwesome.style.color = '#000';
		}
		// console.log('good');
	});
};

startApp();