

//Allgemeine Funktionen================================================

//Reihenfelder als Array
function getRowfieldNames() {
    var fields = {       
		"1" : {"nummer" : 1,
		 "name" : "frm"},
		"2" : {"nummer" : 2,
		"name" : "selKomp"},
		"3" : {"nummer" : 3,
		"name" : "selGrKlasse"},
		"4" : {"nummer" : 4,
		"name" : "selOptions"},
		"5" : {"nummer" : 5,
		"name" : "giveWert"},
		"6" : {"nummer" : 6,
		"name" : "inputMenge"},
		"7" : {"nummer" : 7,
		"name" : "giveSum"}
	};
    return fields;
}

console.log("baukotzobjects2.js ist eingebunden!");


//Filtert Objekte in einem  Objektarray nach dem übergebenen Key und gibt ein Array mit Objekten zurück, deren Value ein Wert des übergebenen Kriterienarrays critValArr ist.

function filtrKeyReturnObjArr(arrOfObj, key, ...critValArr) {
	resultingObjArr = [];
	for (let index of arrOfObj) {
	  for ( let i = 0; i < critValArr.length; i += 1 ) {
		//console.log("critValArr[i]: " + critValArr[i]);
		if( index[key] === critValArr[i] ) {
		  resultingObjArr.push(index);
		}
		//console.log("actual Object.wert: " + index.wert);     
	  }          
	}
	return resultingObjArr;     
}


//Filtert ein ObjArray nach Keys und gibt ein Array mit den Values zurück.
function filtrKeyReturnValueArr(arrOfObj, critKey) {
	resultingValues = [];
	for (let index of arrOfObj) {
		if (typeof(index) === "object") {
		//console.log("typeof(index) : " + typeof(index));
		//console.log("typeof(index) === 'object': " + (typeof(index) === "object"));
		//console.log("index = " + index);  
		//console.log("index.wert = " + index.wert);  
		//console.log("index.critVal = " + index[critKey]);       
		resultingValues.push(index[critKey]);     
		} else {
		console.log("Funktion filtrForKeyInObjsArr() enthält nicht nur Objekte");
		return null;
		}           
	}      
	return resultingValues;     
}  


//Per Button eine neue Zeile einfügen
function baueNeueZeile() {	
	var zaehler = 0;	
	
	return function(){

		//IDs werden aus dem fieldsObjekt generiert. Somit kann man die Feldnamen später jederzeit ändern
		var fields = getRowfieldNames();	

        var rowId 		= 	zaehler;
        var frmName 	= 	"frm";
		var idKomp 		=  	fields["2"].name + zaehler;
		var idGrKl 		= 	fields["3"].name + zaehler;
		var idOptions 	= 	fields["4"].name + zaehler;
        var idWert 		= 	fields["5"].name + zaehler;
        var idMenge 	= 	fields["6"].name + zaehler;
        var idSumme 	= 	fields["7"].name + zaehler;

		//console.log("baueNeueZeile()- var zaehler alt: " + zaehler);
		var string = '<div id="'+ rowId +'" class="row">'+
            '<div class="col-3">'+
                '<form name="'+frmName+idKomp+'" >'+
                    //'<label for="'+idKomp+'">Komponente wählen</label><br />'+
                    '<select id="'+idKomp+'"></select>'+
                '</form>'+
			'</div>'+
            '<div class="col-1">'+
                '<form name="'+frmName+idGrKl+'">'+
                    //'<label for="'+idGrKl+'">Größenklasse wählen</label><br />'+
                    '<select id="'+idGrKl+'" >'+
                        '<option value="" >Bitte erst Komponente wählen</option>'+
                    '</select>'+
                '</form>'+
			'</div>'+
            '<div class="col-4">'+
                '<form name="'+frmName+idOptions+'">'+
                    //'<label for="'+idOptions+'">Option wählen</label><br />'+
                    '<select id="'+idOptions+'">'+
                        '<option value="" >Bitte Optionen wählen</option>'+
                    '</select>'+
                '</form>'+
			'</div>'+
            '<div class="col-2">'+
                '<form name="'+frmName+idWert+'">'+
                    //'<label for="'+idWert+'">Wert</label><br />'+
                    '<p id="'+idWert+'">...</p>'+
                '</form>'+
            '</div>'+
            '<div class="col-1">'+
                '<form name="'+frmName+idWert+'">'+
                    //'<label for="'+idMenge+'">Menge</label><br />'+
                    '<input id="'+idMenge+'"></input>'+
                '</form>'+
            '</div>'+
            '<div class="col-1">'+
                '<form name="'+frmName+idWert+'">'+
                    //'<label for="'+idSumme+'">Summe</label><br />'+
                    '<p id="'+idSumme+'"><-</p>'+
                '</form>'+
            '</div>'+
		'</div>';
		zaehler += 1;
		//console.log("baueNeueZeile()- var zaehler neu: " + zaehler);

		var woEinfuegen = document.getElementById("datenreihen").lastElementChild;

		woEinfuegen.insertAdjacentHTML('afterend', string);		
		
		//Kurze Prüfung ob die aktuelle ID an fillKompField übergeben wird.
		//console.log("ID der neuen Komponentenauswahl: " + idKomp);		

        //Allen ZeilenObjekten den row-Wert mitgeben
        document.getElementById(idKomp).dataset.rowName 	= 	rowId;
        document.getElementById(idGrKl).dataset.rowName 	= 	rowId;
        document.getElementById(idOptions).dataset.rowName 	= 	rowId;
        document.getElementById(idWert).dataset.rowName 	= 	rowId;
        document.getElementById(idMenge).dataset.rowName 	= 	rowId;
		document.getElementById(idSumme).dataset.rowName 	= 	rowId;
		
		//Komponentenauswahlfeld befüllen.
		i = rowId.toString();
		fillKompField(i);       //da rowID eine Zahl ist und fillkompField auf str prüft muss erst ein String generiert werden		
				
		//Eventlistener auf Onchange des neuen Komponentenauswahlfeldes legen
		document.getElementById(idKomp).addEventListener("change", fillGrKlasse);
		//Eventlistener auf Onchange des neuen Größenklassenauswahlfeldes legen
		document.getElementById(idGrKl).addEventListener("change", fillOptions);
		//Eventlistener auf Onchange des neuen Optionenauswahlfeldes legen
		document.getElementById(idOptions).addEventListener("change", fillWert);
        //Eventlistener auf Onchange des Menge inputfeldes legen
        document.getElementById(idMenge).addEventListener("change", fillSumme);

		//Zur Sicherheit
		return true;
	};
}


//Erstellt die neue Funktion addNeueZeile mit dem returnwert von baueNeueZeile. Diese wird auf den Button gelegt. Es ginge auch baueNeueZeile() auf dem Button.
var addNeueZeile = baueNeueZeile();


//Eventbinding auf Button
document.getElementById("neueZeileBtn").addEventListener("click", addNeueZeile);
//Eventbinding auf Button
//document.getElementById("neueZeileBtn").addEventListener("click", deleteSum);


//Wird eine Methode des aufrufenden Objektes. Daher kann die Methode durch this.id auf die ID des Aufrufers zugreifen
//Tags: element ID übergeben, getElement ID
function clickID() {
	var aufrufer = this.id;
	console.log(aufrufer);	
}


//Unique Werte aus Array erstellen und in neues Array schreiben.
function arrUnique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

//filtr Objekte.nummer nach Werten in Array
function filtr(objArr, critArr) {
	var resultArr = [];
	
	for (n = 0; n < objArr.length; n +=1) { //Nimm jedes Objekt aus ObjArr
		
		for (var i = 0; i < critArr.length; i += 1) { //Nimm jedes Kriterium aus critArrr			
	
			if (objArr[n].nummer === critArr[i]) {
				resultArr.push(objArr[n].wert);
			}			
			
			//resultArr.push(objArr[n].nummer + ": " +  i);
		}
		
		
	}
	return resultArr;
}


//Neue Summe
function getSum() {
	var searchValues =[];
	var sumValues = [];
	var data = getAllData();
	var eachVal = 0;
	var nodes = document.querySelectorAll("[id^='selOptions']");
	var sum = 0;	
	//Aus der Website alle Datensatzids einlesen. Sind im dataset des optionenfeldes gespeichert
	for (var i = 0; i < nodes.length; i += 1) {
		eachVal = Number(nodes[i].dataset.indexNumber);
		console.log(eachVal);
		//Prüfen ob die IDs nicht undefined oder null sind.
		if (eachVal !== undefined && eachVal !== null) {			
			searchValues.push(eachVal);
		} else {
			return "Fehler: ein Wert in der Summenbildung ist undefined.";
		}
	}
	//searchValues ausgeben
	console.log("searchValues[] :" + searchValues);
	
	//filtr
	sumValues = filtr(data, searchValues);

	//Durch forEach - Schleife ersetzen
	for( var j = 0; j < sumValues.length; j += 1 ) {
		sum += sumValues[j];
	}

	//searchValues ausgeben
	console.log("sumValues[]: " + sumValues);

	//Summ ausgeben
	console.log("Summe: " + sum);
	
	//Summenwert in Ergebnisfeld schreiben
	document.getElementById("ergebnis").textContent = sum +" €/m²";	
}


function deleteSum() {
	document.getElementById("ergebnis").textContent = "Optionen wählen";
}


//ENDE - Allgemeine Funktionen ========================================



//window.onload=======================================================


//Code ausführen sobald das Dokument fertig geladen wurde
window.onload = function() {	 
	 addNeueZeile();
}


//ENDE window.onload===============================================




//Auswahlfelder befüllen===============================================


//Bestimmtes Selection-Feld löschen
//Bsp deleteDistinctSelectField(id, "selGrKlassen", "Bitte erst Größenklassen auswählen")
function deleteDistinctSelectField(callerRowId, nextFieldName, optionText) { 
	var zielId = nextFieldName + callerRowId;
	console.log("Fu deleteDistincSelectField zielId: " + zielId);
	var ziel = document.getElementById(zielId);
	ziel.innerHTML = "<option>"+optionText+"</option>";
	return true;
}

//Bsp deleteDistinctPField(id, "giveWert", "<-Option?", "wert")
function deleteDistinctPField(callerRowId, pFieldName, textInsert, datasetName){
    console.log("Funktion deleteDistinctPField - callerRowIs, pFieldName, textInsert: " + callerRowId +", " + pFieldName + ", " + textInsert);	
	var zielId = pFieldName + callerRowId;
	var ziel = document.getElementById(zielId);
	ziel.textContent = textInsert;
	ziel.dataset[datasetName] = 0;
	//document.getElementById(id).textContent = 0;
    //document.getElementById(id).dataset[datasetName] = 0;
    return true;    
}


//Bsp deleteDistinctValueField(id, "inputMenge", 0, "menge")
function deleteDistinctValueField(callerRowId, vFieldName, vInsert, datasetName){
    console.log("Funktion deleteDistinctValueField - callerRowIs, vFieldName, vInsert: " + callerRowId +", " + vFieldName + ", " + vInsert);	
	var zielId = vFieldName + callerRowId;
	var ziel = document.getElementById(zielId);
	ziel.value = vInsert;
	ziel.dataset[datasetName] = 0;
	//document.getElementById(id).textContent = 0;
    //document.getElementById(id).dataset[datasetName] = 0;
    return true;    
}


//KomponentenFeld befüllen
function fillKompField(rowId){

	if(typeof(rowId) === "string") {
		console.log("fu fillKompField(), if1,  var para, exp dataset: " + rowId);
		var auswahl = document.getElementById("selKomp" + rowId).value;
		console.log("fu fillKompField(), if1, var para, exp string: " + rowId);
		var myRowId = rowId;

	} else {
		console.log("fu fillKompField(), if1..else, var para, exp htmlSelect: " + rowId);
		//Filterwert = Nutzerauswahl in kompSelect Feld. Dient um kleinere Objektliste aus data zu generieren. 
		var auswahl = this.value;
		console.log("fu fillKompField(), if1..else, var auswahl, exp string: " + auswahl);
		var myRowId = this.dataset.rowName;
		console.log("fu fillKompField(), if1..else, var myRowId, exp dataset: " + myRowId);
	}
	
	if ( auswahl === "Bitte Komponente auswählen") {
		fillGrKlasse(myRowId);
		//fillOptions(myRowId);  //Gehts noch nicht
	}
	
	var arr = getComponents(); //In allghdata.js definiert
	var kompField = document.getElementById("selKomp" + myRowId);
	var string = "<option>Bitte Komponente auswählen</option>";
	for (i in arr){
		string += "<option>"+ arr[i] +"</option>";
	}
	kompField.innerHTML = string;
	return true;
}


function fillGrKlasse(rowId) {
	if(typeof(rowId) === "string") {
		console.log("fu fillGrKlasse(), if1,  var para, exp string: " + rowId);

		var auswahl = document.getElementById("selGrKlasse" + rowId).value;
		console.log("fu fillGrKlasse(), if1, var auswahl, exp string: " + auswahl);

		var myRowId = rowId;
	} else {
		console.log("fu fillGrKlasse(), if1..else, var para, exp htmlSelect: " + rowId);
		//Filterwert = Nutzerauswahl in kompSelect Feld. Dient um kleinere Objektliste aus data zu generieren. 
		var auswahl = this.value;
		console.log("fu fillGrKlasse(), if1..else, var auswahl, exp string: " + auswahl);
		var myRowId = this.dataset.rowName;
		console.log("fu fillGrKlasse(), if1..else, var myRowId, exp dataset: " + myRowId);
	}

	//Wenn der erste Eintrag gewählt ist, alle anderen Felder löschen
	if (auswahl === "Bitte Komponente auswählen"){			
		deleteDistinctSelectField(myRowId, "selGrKlasse", "Bitte Größenklasse wählen");		
		console.log("fillGrKlasse(), if2, deleteDistinctGrKlasse(); ausgeführt.");

		fillOptions(myRowId);
		return true;
	}

	//Daten holen	
	var data = getAllData();

	//Neues Objektarray erstellen, das nur Objekte mit der aktuellen Komponentenauswahl enthält
	var grKl = filtrKeyReturnObjArr(data, "komponente", auswahl);

	//Aus neuem Objekt die Größenklassen alleine in ein neues Array schreiben    
    var grKlArr = filtrKeyReturnValueArr(grKl, "groesse");    
	
	//Nur eindeutige Werte filtern (Alle verwendbaren Größenklassen)
	var grKlUnique = arrUnique(grKlArr);

	//HTML erstellen 
	var string = "<option>Bitte Größenklasse wählen</option>";
	for (i in grKlUnique){
		string += "<option>"+ grKlUnique[i] +"</option>";
	}
	
	//Feld im DOM finden
	 var grKlasseSelect = document.getElementById("selGrKlasse" + myRowId);
	 console.log("fu fillGrKlasse(), var grKlasseSelect, exp htmlSelect: " + grKlasseSelect);	 
	 
	 //Neuen Inhalt in Feldobjekt schreiben
	 grKlasseSelect.innerHTML = string;

	 //Prüfen fillOptions(myRowId);
	 return true;
}


//Optionen befüllen
function fillOptions(rowId) {
	if (typeof(rowId) === "string") {
		var field = "selOptions" + rowId;
		console.log("fu fillOptions() var field - exp string: " + field);
		var auswahl = document.getElementById(field).value;
		console.log("fu fillOptions() var auswahl - exp string: " + auswahl);
		var myRowId = rowId;
		
	} else {		
		//Filterkriterien holen
		var auswahl =this.value;
		//console.log("Fu filloptions var auswahl: " + auswahl);
		var myRowId = this.dataset.rowName;
	}	

	//Wenn der erste Eintrag gewählt ist, alle anderen Felder löschen
	if(auswahl === "Bitte Größenklasse wählen" || auswahl ===""){

		//console.log("Übergabewert this.id: " + myRowId);		
		deleteDistinctSelectField(myRowId, "selOptions", "Bitte Optionen wählen");
		//console.log("fu fillOptions - deleteDistinctGrKlasse(); ausgeführt.");
		fillWert(myRowId);
		//console.log("fu fillOptions - fillWert(); ausgeführt.");
		return true;
	}	

	//Filterkriterien holen
	var testKomponente = document.getElementById("selKomp" + myRowId).value;	
	var testGroesse = document.getElementById("selGrKlasse" + myRowId).value;
	testGroesse = Number(testGroesse);
	var data = getAllData();
	//Neues Objektarray erstellen, das nur Objekte mit der aktuellen Komponentenauswahl enthält
	
	
	var kompObjArr = filtrKeyReturnObjArr(data, "komponente", testKomponente);
	console.log("fillOptions2(), var kompObjArr, exp array: " + kompObjArr);

	var optObjArr = filtrKeyReturnObjArr(kompObjArr, "groesse", Number(testGroesse));
	console.log("fillOptions2(), var optObjArr, exp array: " + optObjArr);

	//Aus neuem Objekt die Größenklassen alleine in ein neues Array schreiben    
	var grKlArr = filtrKeyReturnValueArr(optObjArr, "position");
	console.log("fu filloptions2(), var grKlArr, exp array: " +  grKlArr);

	//Nur eindeutige Werte filtern (Alle verwendbaren Größenklassen)
	var grKlUnique = arrUnique(grKlArr);
	console.log("fu filloptions2(), var grKlUnique, exp array: " + grKlUnique)

	//HTML erstellen und in Auswahlfeld Größenklasse einfügen	
	var string = "<option>Bitte Optionen wählen</option>";
	for (i in grKlUnique){
		string += "<option>"+ grKlUnique[i] +"</option>";
	}
	var grOptionsSelect = document.getElementById("selOptions" + myRowId);
	grOptionsSelect.innerHTML = string;

	//Alle weiteren Felder löschen oder Werte befüllen
	fillWert(myRowId);

	return true;	
}


//Wertfeld auf Onchange des Optionenfeldes befüllen
function fillWert(rowId) {
	//Falls übergabeparameter existier, hole das zugehörige Feld
	console.log("Fu fillWert() para typeof(rowId): " + typeof(rowId));	
	if(typeof(rowId) === "string") {
		var thisRowsOptionsField = document.getElementById("selOptions" + rowId);
		//console.log("Fu fillWert() var thisRowsOptionsField: exp htmlselect" + thisRowsOptionsField);
		var auswahl = thisRowsOptionsField.value;
		//console.log("Fu fillWert() var auswahl: exp str" + auswahl);
		var myRowId = rowId;
	} else {
		var auswahl = this.value;
		console.log("fu fillwert() erste if - else, var auswahl: " + auswahl);
		var myRowId = this.dataset.rowName;
	}

	//Wenn der erste Eintrag gewählt ist, alle anderen Felder löschen
	if(auswahl === "Bitte Optionen wählen"){
		console.log("fu fillWert(): Inside zweite if Abfrage");
		//var myRowId = rowId;
		
		deleteDistinctPField(myRowId, "giveWert", "<-Option?", "wert");
		//console.log("Funktion deleteDistinctPField() aus fillWert() heraus ausfgerufen");
		deleteDistinctPField(myRowId, "giveSum", "...", "summe");
		//console.log("Funktion deleteDistinctPField() aus fillWert() heraus ausfgerufen");
		deleteDistinctValueField(myRowId, "inputMenge", 0, "menge");
		//console.log("Funktion deleteDistinctPField() aus fillWert() heraus ausfgerufen");		
		getTotal();		
		return true;
	}

	var testKomp = document.getElementById("selKomp" + myRowId).value;
	var testGroesse = Number(document.getElementById("selGrKlasse" + myRowId).value);
	var testPosition = auswahl;
	
	var data = getAllData(); //Alle Daten abholen
	var werteObj = data.filter((obj)=>{return (obj.komponente===testKomp && obj.groesse === testGroesse && obj.position === testPosition) });
	
	//var werteObj = data.filter((obj)=>{return (obj.komponente===test1 && obj.groesse === test2 && obj.position === test3) });
    console.log("fu fillWert(), var werteObj[0]: " + werteObj[0]);    
	
	//Prüfungen
	if (werteObj[0] === undefined) {//Wenn keine Option ausgewählt
		//document.getElementById(this.nxtWert).textContent = "Option ?";
        document.getElementById(this.id).dataset.indexNumber = "";
		
        getTotal();
        console.log("Funktion getTotal aus fillWert() heraus ausfgerufen");
        return true;
	}  else if (werteObj.length > 1) { //Fehler wenn doppelte Werte in ObjArray
		console.log("werteObj: "+ werteObj + ", werteObj.length: " + werteObj.length + ", werteObj.wert[0]: " + werteObj[0].wert);
        alert("Ein Fehler ist aufgetreten: Werteobjekt ist zu lang :(");
        return "Error";
     } else {  
		document.getElementById("giveWert" + myRowId).textContent = werteObj[0].wert +" "+ werteObj[0].we_einheit;

		//Wert auch im Dataset des Wertfeldes speichern
		document.getElementById("giveWert" + myRowId).dataset.wert = werteObj[0].wert;

		//Nummer des Datensatzes für später in die datasets des aktuellen Optionenfeldes schreiben.
		document.getElementById("giveWert" + myRowId).dataset.indexNumber = werteObj[0].nummer;
		console.log("Datensatznummer: " + werteObj[0].nummer);		
		
		return true;
	}
}


//Ein bestimmtes Summenfeld löschen (Wert und Dataset)
function deleteDistinctField(id, dataset){
    console.log("Funktion deleteDistinctWert Parameter: "+ id);
    document.getElementById(id).textContent = 0;
    document.getElementById(id).dataset[dataset] = 0;
    return true;    
}


//Ein bestimmtes Summenfeld löschen (Wert und Dataset)
function deleteDistinctSumme(id){
    console.log("Funktion deleteDistinctSumme Parameter: "+ id);
    document.getElementById(id).textContent = 0;
    document.getElementById(id).dataset.summe = 0;
    return true;    
}


//giveSummenfeld befüllen
function fillSumme() {
    //console.log("Mengenfeld verändert!");
    //console.log(this.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.dataset.wert);
    //console.log(this.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.textContent);   

    var wert = this.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.dataset.wert;
    var summenfeld = this.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild;
    var sumId = this.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.id
    console.log("sumId :" + sumId);

    wert = +wert;
    //console.log("wert = +wert;: " + wert);
    var menge = +this.value;
    //console.log("menge = this.value;: " + menge);
    //console.log("!isNaN(wert): " + !isNaN(wert));
    //console.log("!isNaN(menge): " + !isNaN(menge));
    
    if ( !isNaN(wert) && !isNaN(menge) ) {
        this.dataset.menge = menge;
        //console.log("Doing if statement");
        var sum = wert * menge;
        //console.log("Sum : " +sum);
        sum = sum.toFixed(2);
        //console.log("sum.toFixed(2) : " + sum);      
        summenfeld.textContent = sum + " €";
        summenfeld.dataset.summe = sum;

        getTotal();
        return true;
    } else {
        this.dataset.menge = null;
        console.log("Es ist ein Fehler in der Summenberechnung aufgetreten. Einer der Multiplikatoren scheint keine Zahl zu sein.");
        
        deleteDistinctField(sumId,"summe"); //FeldID und dataset.summe       
        console.log("deleteDistinctField ausgeführt");
        getTotal();
    }
   
    return true;
}


//Gesamtsumme lsöchen
function deleteTotal() {
    document.getElementById("ergebnis").textContent = "Optionen wählen";
}


//Gesamtsumme berechnen
function getTotal(){
    var nodes = document.querySelectorAll("[id^='giveSum']");
    var total = 0;
    for( index of nodes) {
        var summenwert = Number(index.dataset.summe);
        if( !isNaN(summenwert)) {
            var total = total + summenwert
            console.log(total);
        }
    }
    total = total.toFixed(2);
    var gesamt = document.getElementById("ergebnis");
    gesamt.textContent = total + " €"
    gesamt.dataset.gesamt = total;   
    return true;
}



//ENDE - Auswahlfelder befüllen===============================================

/*Löschen

}
*/
