'use strict';

var wszystkieZgody = document.getElementById("wszystkie-zgody");

var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");

var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");

var wyslijBtn = document.getElementById("wyslij");

var inputImie = document.getElementById("name");

var inputEmail = document.getElementById("email");

var wiadomosc = document.getElementById("wiadomosc")


/*var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");*/


/*

sprawdzenie czy jest kliknienty i 
*/

// Moje
//function klik() {
//	console.log("kliknienty");
//}
//wszystkieZgody.onclick = klik;

//zdarzenie addListener po kliknięciu żeby w consoli pokazało się że jest kliknięty

//lepszy sposob onchange
/*wszystkieZgody.onchange = function(){
	console.log('kliknienty');
	console.log(wszystkieZgody.checked);
//	wyszstkie zgody lub this
}
console.log(wszystkieZgody);
console.log(wszystkieZgody);*/

function stanCheckboxa() {
	
	zgodaMarketingowa1.checked = this.checked
	zgodaMarketingowa2.checked = this.checked
	
	zgodaMarketingowa1.disabeled = this.checked
	zgodaMarketingowa2.disabeled = this.checked
}
wszystkieZgody.onchange = stanCheckboxa;

function walidujFormularz(event) {
	
//	  var bladWalidacji = document.createElement('p');
//    bladWalidacji.innerHTML = "BŁąd!";
//    inputImie.parentNode.insertBefore(bladWalidacji, inputImie.nextSibling);

	
	wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';
	
	if(inputImie.value.trim() =="") {
		var msgImie = document.createElement("li");
		msgImie.innerHTML = "Wpisz Imie!";
		wiadomosc.appendChild(msgImie);
		
		
		
		event.preventDefault();
	} 
	
	if(inputEmail.value.trim() ==""){
		var msgEmail = document.createElement("li");
		msgEmail.innerHTML = "Wpisz E-mail!";
		wiadomosc.appendChild(msgEmail);
		event.preventDefault();
		 
	}	
	
	if(! zgodaMarketingowa1.checked) {
		var msgZgodaMArketingowa1 = document.createElement("li");
		msgZgodaMArketingowa1.innerHTML = "Nie wyraziłeś zgody nr.1!";
		wiadomosc.appendChild(msgZgodaMArketingowa1);
		event.preventDefault();
	}
	
}

wyslijBtn.addEventListener('click', walidujFormularz);

//preventDefult- blokuje domyślnąfunkcje
//funkcja trim usuwa z lewej i prawej strony znaki puste
//za pomocą .value pobieramy wartość elementu