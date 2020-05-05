var fass = 0; //erzeugt ein leeres Fass
/*Diese Funktion fügt eine Menge in ml dem Fass hinzu*/
function trink(menge){ //Funktionsaufruf
  fass = fass + menge; //dem Fass wird die Menge hinzugefügt
  aktualisieren();
  speichern();
}
/*Speichert den Wert des aktuellen Fasses im Regal*/
function speichern(){
  //
}
/*Aktualisiert das Fass in der UI*/
function aktualisieren(){
  document.getElementById('fass').innerHTML = fass + 'ml'; //setzt den Wert des Fasses im User Interface
}
