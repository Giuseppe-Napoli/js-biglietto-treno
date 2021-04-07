var km_percorsi = parseInt(prompt ('Quanti chilometri percorrerai?'));
if(isNaN(km_percorsi)){
  alert('Non hai inserito correttamente i chilometri, aggiorna la pagine e riprova')
}
var price = 0.21;
var prz_km = km_percorsi * price;
var prz_20 = ((prz_km * 20) / 100);
var prz_40 = ((prz_km * 40) / 100);

var età = parseInt(prompt ('Età passegero?'));
if(isNaN(età)){
  alert('Non hai inserito correttamente i tuoi anni, aggiorna la pagine e riprova')
}
var sconto = prz_km;
if(età < 18){
  var sconto = prz_km - prz_20;
  document.getElementById('fascia').innerHTML = "*In quanto minorenne il prezzo è stato scontato del 20%"; 
  console.log(sconto);
}else if(età > 65){
  var sconto = prz_km - prz_40;
  document.getElementById('fascia').innerHTML = "*In quanto over 65 il prezzo è stato scontato del 40%"; 
  console.log(sconto);
}else{
  var sconto = prz_km;
  console.log(sconto);
}

document.getElementById('passegero').innerHTML = "Gentile Passegero, il prezzo previsto per il suo viaggio e di " + sconto.toFixed(2) + "€"; 

