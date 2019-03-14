// Get current year
const currentYear = () => {
	let d = new Date();
	let year = d.getFullYear();
	document.getElementById('currentYear').innerHTML = year;
}

// On application start, perform these
const startApp = () => {
	currentYear();
	
};

startApp();