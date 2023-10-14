
var timesClicked = 0;

function turnOff() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
		document.getElementById("inner").style.cursor = "auto"; 
	}

	document.getElementById("iphone").addEventListener("click", () => {
		document.getElementById("inner").style.opacity = "1"; 
		document.getElementById("iphone").style.backgroundColor = "transparent"; 
		document.getElementById("iphone").style.backgroundImage = "url('Images/Backgrounds/lockscreen.jpeg')";   
	});
}

function turnOffLock() {
	timesClicked++;

	if (timesClicked % 2 == 1) { 
		document.getElementById("inner").style.opacity = "0"; 
		document.getElementById("iphone").style.backgroundImage = "none";   
		document.getElementById("iphone").style.backgroundColor = "#000"; 
		document.getElementById("inner").style.cursor = "pointer"; 
	} else {
		window.location.href = "/index.html";	
	}

	document.getElementById("iphone").addEventListener("click", () => {
		window.location.href = "/index.html";			
	});
}

function changeColorTorch() {
	timesClicked++;

	if (timesClicked % 2 == 1) {
	document.getElementById("torchBtn").style.backgroundColor = "#ffffff";
	document.getElementById("torchImg").src = "Images/Icons/torchDark.png";
	} else {
		document.getElementById("torchBtn").style.backgroundColor = "#1d2145";
		document.getElementById("torchImg").src = "Images/Icons/torch.png";
	}
}

var passcodeCount = 0;

function addFilledDot() {
	passcodeCount++;

	document.getElementById("dot" + passcodeCount).style.backgroundColor = "#fff";

	if (passcodeCount == 6) {
		setTimeout(function(){
			window.location.href = "/home.html";	

			var all = document.getElementsByClassName("dot");
			for (var i = 0; i < all.length; i++) {
				all[i].style.backgroundColor = "transparent";
			}					
		}, 500);
	}
}
function obtenerHoraBolivia() {
	const ahora = new Date();
	const horaBolivia = new Date(ahora.toLocaleString('en-US', {timeZone: 'America/La_Paz'}));
	return horaBolivia.toLocaleTimeString('es-BO');
}

function actualizarHora() {
	const horaElemento = document.querySelector('.time');
	horaElemento.textContent = obtenerHoraBolivia();
}

setInterval(actualizarHora, 1000);
actualizarHora(); // Actualiza la hora inmediatamente al cargar la página

document.querySelector('.appContainer a').addEventListener('click', function() {
	window.location.href = 'imagen.html';
  });
  
  document.querySelector('.level._2 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'camera.html';
  });

// primera
  document.querySelector('.level._a1 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'primera.html';
  });

  //primera1
  document.querySelector('.level._a2 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'primera1.html';
  });
  //segunda
  document.querySelector('.level._b1 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'segunda.html';
  });
  //segunda2
  document.querySelector('.level._b2 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'segunda2.html';
  });
  //tercera
  document.querySelector('.level._c3 a').addEventListener('click', function(event) {
	event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
	window.location.href = 'tercera.html'});
	//tercera3
	document.querySelector('.level._d4 a').addEventListener('click', function(event) {
		event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
		window.location.href = 'tercera3.html'});
	//cuarta
	document.querySelector('.level._e5 a').addEventListener('click', function(event) {
		event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
		window.location.href = 'cuarta.html'});
	//cuarta4
	document.querySelector('.level._f6 a').addEventListener('click', function(event) {
		event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
		window.location.href = 'cuarta4.html'})
	//quinta
	document.querySelector('.level._g7 a').addEventListener('click', function(event) {
		event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
		window.location.href = 'quinta.html'})
	//quinta5
	document.querySelector('.level._h8 a').addEventListener('click', function(event) {
		event.preventDefault(); // Evita el comportamiento predeterminado del enlace (navegar a la página)
		window.location.href = 'quinta5.html'})