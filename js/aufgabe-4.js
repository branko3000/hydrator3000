var fass = 0; //erzeugt ein leeres Fass
/*Diese Funktion fügt eine Menge in ml dem Fass hinzu*/
function trink(menge){ //Funktionsaufruf
  fass = fass + menge; //dem Fass wird die Menge hinzugefügt
  aktualisieren();
  speichern();
}
/*Erzeugt ein Etikett*/
function erzeugeEtikett(){
  //
}
/*Speichert den Wert des aktuellen Fasses unter dem Etikett im Regal*/
function speichern(){
    localStorage.setItem("fass", fass); //das Fass im Regal wird aktualisiert
}
/*Aktualisiert das Fass in der UI*/
function aktualisieren(){
  document.getElementById('fass').innerHTML = fass + 'ml'; //setzt den Wert des Fasses im User Interface
}
