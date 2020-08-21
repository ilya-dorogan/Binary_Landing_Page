"use strict";

window.addEventListener('DOMContentLoaded', () => {

	const button = document.querySelectorAll('button');

	const sectionName = document.querySelectorAll('.about__menu li');

	button.forEach(button => {
		button.addEventListener('click', () => {
			button.scrollTo();
		});
	});



});