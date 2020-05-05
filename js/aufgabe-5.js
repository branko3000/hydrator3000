/*Hier wird das Etikett für den heutigen Tag erzeugt*/
var etikett = erzeugeEtikett();
var fass = 0; //erzeugt ein leeres Fass
/*Diese Funktion fügt eine Menge in ml dem Fass hinzu*/
function trink(menge){ //Funktionsaufruf
  fass = fass + menge; //dem Fass wird die Menge hinzugefügt
  aktualisieren();
  speichern();
}
/*Erzeugt ein Etikett*/
function erzeugeEtikett(){
  var heute = new Date(); //speichert das heutige Datum
  var jahr = heute.getFullYear(); //speichert das Jahr aus dem Datum
  var monat = heute.getMonth(); //speichert den Monat aus dem Datum
  var tag = heute.getDay(); //speichert den Tag aus dem Datum
  return tag + "-" + monat + "-" + jahr; //erzeugt und speichert ein Etikett, basierend auf dem Datum
}
/*Speichert den Wert des aktuellen Fasses unter dem Etikett im Regal*/
function speichern(){
    localStorage.setItem("fass", fass); //das Fass im Regal wird aktualisiert
}
/*Aktualisiert das Fass in der UI*/
function aktualisieren(){
  document.getElementById('fass').innerHTML = fass + 'ml'; //setzt den Wert des Fasses im User Interface
}
