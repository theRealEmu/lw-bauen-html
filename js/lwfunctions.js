/*Fallback für Navigation. Auskommentieren und in main.js $('#nav').html(navContent); auskommentieren.*/
/*
var navInsert = document.getElementById('nav');
var navContent = '<div class="container">'+
                  '<!-- Toggler/collapsibe Button -->' +
                  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">' +
                    '<span class="navbar-toggler-icon"></span>' +
                  '</button>' +
                  '<!-- Navbar links -->' +
                   '<div class="collapse navbar-collapse" id="collapsibleNavbar">' +
                     '<ul class="navbar-nav">' +
                       '<li class="nav-item">' +
                         '<a href="landwirtschaftlichesbauen.html" class="nav-link"><i class="fas fa-home"></i>Startseite</a>' +
                       '</li>' +
                       '<li class="nav-item dropdown">' +
                         '<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i class="fas fa-map-signs"></i>Planungshilfen</a>' +
                         '<div class="dropdown-menu">' +
                           '<a class="dropdown-item" href="baurechtssystematik.html">Übersicht des Baurechts</a>' +
                           '<a class="dropdown-item" href="projekt.html">1 - Bauprojekt konkretisieren</a>' +
                           '<a class="dropdown-item" href="standort.html">2 - Standort</a>' +
                           '<a class="dropdown-item" href="antragsverfahren.html">3 - Antragsverfahren</a>' +
                           '<a class="dropdown-item" href="foerderung.html">4 - Förderung</a>' +
                           '<a class="dropdown-item" href="ansrechpartner.html">5 - Ansprechpartner</a>' +
                         '</div>' +
                       '</li>' +
                       '<li class="nav-item">' +
                        '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                          '<i class="fas fa-euro-sign"></i>Baukosten' +
                        '</a>' +
                      '</li>' +
                      '<li class="nav-item">' +
                       '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                        '<i class="fas fa-graduation-cap"></i>Praxisbeispiele</a>' +
                     '</li>' +
                     '<li class="nav-item">' +
                      '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                        '<i class="fas fa-question"></i>Hilfe</a>' +
                    '</li>' +
                    ' <li class="nav-item"> ' +
                     '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                       '<i class="fas fa-info"></i>Informationen</a>' +
                   '</li>' +
                     '</ul>' +
                   '</div>' +
                   '</div>';

*/
function insertNav(){
  var navObj = document.getElementById('nav');
  var navHtml = '<div class="container">'+
                    '<!-- Toggler/collapsible Button -->' +
                    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">' +
                      '<span class="navbar-toggler-icon"></span>' +
                    '</button>' +
                    '<!-- Navbar links -->' +
                     '<div class="collapse navbar-collapse" id="collapsibleNavbar">' +
                       '<ul class="navbar-nav">' +
                         '<li class="nav-item">' +
                           '<a href="landwirtschaftlichesbauen.html" class="nav-link"><i class="fas fa-home"></i>Startseite</a>' +
                         '</li>' +
                         '<li class="nav-item dropdown">' +
                           '<a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown"><i class="fas fa-map-signs"></i>Planungshilfen</a>' +
                           '<div class="dropdown-menu">' +
                             '<a class="dropdown-item" href="baurechtssystematik.html">A - Übersicht Baurecht</a>' +
                             '<a class="dropdown-item" href="projekt.html">1 - Bauprojekt konkretisieren</a>' +
                             '<a class="dropdown-item" href="standort.html">2 - Standort</a>' +
                             '<a class="dropdown-item" href="genehmigungsverfahren.html">3 - Genehmigungsverfahren</a>' +
                             '<a class="dropdown-item" href="foerderung.html">4 - Förderung</a>' +
                           '</div>' +
                          '</li>' +
                          '<li class="nav-item">' +
                            '<a href="bktools.html" class="nav-link">' +
                              '<i class="fas fa-euro-sign"></i>Baukosten' +
                            '</a>' +
                          '</li>' +

                          '<li class="nav-item dropdown">' +
                          '<a class="nav-link dropdown-toggle" href="praxisbeispiele.html" id="navbardrop" data-toggle="dropdown"><i class="fas fa-graduation-cap"></i>Praxisbeispiele</a>' +
                          '<div class="dropdown-menu">' +
                            '<a class="dropdown-item" href="buwe.html">Bundeswettbewerbe LW-Bauen</a>' +
                            '<a class="dropdown-item" href="architekturwettbewerb.html">Architekturbwettbewerb </br>"Stall der Zukunft"</a>' +
                          '</div>' +
                          
                         '</li>' +
                          '<li class="nav-item">' +
                            '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                            '<i class="fas fa-question"></i>Hilfe</a>' +
                          '</li>' +
                          '<li class="nav-item"> ' +
                            '<a href="landwirtschaftlichesbauen.html" class="nav-link">' +
                            '<i class="fas fa-info"></i>Informationen</a>' +
                          '</li>' +
                       '</ul>' +
                     '</div>' +
                     '</div>';
  console.log('insertNav function ausgeführt');
  navObj.innerHTML = navHtml;
};

function insertPrint() {
	var printInsert = 	'<!--Download und Seite drucken -->' +
										 '<div class="printPage text-right">' +
											 '<a href="javascript:print();">Diese Seite drucken</a>' +
										 '</div>' +
										 '<!--Ende Download und Seite drucken -->';

	var printNode = document.createElement("DIV");               	// Create a DIV node
	printNode.innerHTML = printInsert;                    				//Set innerHTML
	var lastOuterBox = document.getElementsByClassName("outerBox").length;
	console.log(lastOuterBox);
	document.getElementsByClassName("outerBox")[(lastOuterBox-1)].appendChild(printNode);
	console.log('Seite Drucken angehängt');												//Kontrolle
};


function insertFooter() {
	var footerInsert = 		'<div class="container links">' +
													'<a href="http://www.ktbl.de" class="first">KTBL Startseite</a> | <a href="https://www.ktbl.de/inhalte/service/kontakt/">Kontakt</a> | <a href="https://www.ktbl.de/inhalte/service/impressum/">Impressum</a> | <a href="https://www.ktbl.de/inhalte/service/nutzungsbedingungen-fuer-online-anwendungen/">Nutzungsbedingungen</a>' +
												'</div>';
	var printNode = document.getElementsByClassName("footer")[0];               	// Create a DIV node
	printNode.innerHTML = footerInsert;
	console.log('Footer angehängt');
}
