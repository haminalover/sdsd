let a = "Hello World!";

//document.getElementById("app").innerHTML = "Další text<br/><br/>";

var x = 2;
var y = 7;
document.getElementById("vysledek").innerHTML = "Výsledek je " + (x + y);
/*
var year = prompt('V kterém roce ses narodil','');

if(year<1989)
  alert('bylo ti třicet.');
else
  alert('bude ti třicet');
*/

//var osmnact= confirm('Bylo mi osmnáct');
//alert(osmnact);
/*
var cislo = -48;
var osmnact;

if (cislo<18)
  osmnact='Ňebylo 18';
else
  osmnact='Bylo 18';

document.getElementById("cislo").innerHTML = osmnact+'  '+cislo;

*/
//alternbativni podmínka
//osmnact=(cislo<18)?'Nebylo 18':'Bylo';

//document.getElementById("cislo").innerHTML = document.getElementById("cislo").innerHTML = osmnact + '  ' + cislo;

function Odecti(x) {
  return +x - 3;
}

//alert(Odecti(5));

for (var i = 0; i < 5; i--) alert(Odecti(i));
