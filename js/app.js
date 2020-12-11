const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function total() {
	var x = document.getElementById("grafico_total");
	var y = document.getElementById("grafico_acao");
	var z = document.getElementById("grafico_tesouro");
	if (x.style.display === "none") {
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
	} else {
		console.log("deu erro")
		y.style.display = "none";
	}
}

function acao() {
	var x = document.getElementById("grafico_total");
	var y = document.getElementById("grafico_acao");
	var z = document.getElementById("grafico_tesouro");
	if (y.style.display === "none") {
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
	} else {
		console.log("deu erro")
		x.style.display = "none";
	}
}

function tesouro() {
	var x = document.getElementById("grafico_total");
	var y = document.getElementById("grafico_acao");
	var z = document.getElementById("grafico_tesouro");
	if (z.style.display === "none") {
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
	} else {
		console.log("deu erro")
		x.style.display = "none";
	}
}
