$(document).ready(function () {

	//init mmenu
	$("#mmenu").mmenu({});
	var mmenu = $("#mmenu").data( "mmenu" );

	// Look for .hamburger
	var hamburger = document.querySelector(".hamburger");

	// Load all possible class
	var hamburgerClass = [
		"hamburger--3dx",
		"hamburger--3dx-r",
		"hamburger--3dy",
		"hamburger--3dy-r",
		"hamburger--arrow",
		"hamburger--arrow-r",
		"hamburger--arrowalt",
		"hamburger--arrowalt-r",
		//"hamburger--boring", boring is boring, disable this one
		"hamburger--collapse",
		"hamburger--collapse-r",
		"hamburger--elastic",
		"hamburger--elastic-r",
		"hamburger--emphatic",
		"hamburger--emphatic-r",
		"hamburger--slider",
		"hamburger--slider-r",
		"hamburger--spin",
		"hamburger--spin-r",
		"hamburger--spring",
		"hamburger--spring-r",
		"hamburger--stand",
		"hamburger--stand-r",
		"hamburger--squeeze",
		"hamburger--vortex",
		"hamburger--vortex-r",
	];

	//init first class
	var currentClass = hamburgerClass[Math.floor(Math.random() * hamburgerClass.length)];
	hamburger.classList.add(currentClass);

	// On click
	hamburger.addEventListener("click", function () {
		// Toggle class "is-active"
		hamburger.classList.toggle("is-active");
		if (hamburger.classList.contains("is-active")) {
			mmenu.open();
			hamburger.classList.remove(currentClass);
			//change class
			currentClass = hamburgerClass[Math.floor(Math.random() * hamburgerClass.length)];
			//add new class
			hamburger.classList.add(currentClass);
		}else {
			mmenu.close();
		}

		// Do something else, like open/close menu
	});
});
