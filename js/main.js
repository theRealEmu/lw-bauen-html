
$(document).ready(function(){

			//Code um die Bootstrap Popovers zu benutzen
	    $('[data-toggle="popover"]').popover();


			//Slider für die CARDS (Beispiele .example)
			$(".example").children(".card-header").click(function(){
				$(this).next(".card-body").slideToggle();
			});

			$(".slideteaser-header").click(function(){
				$(this).next(".slideteaser-slider").slideToggle();
			});

			//$('#nav').html(navContent);

			//insertPrint();	//Diese Seite Drucken einfügen
			//insertFooter();	//Footer einfügen
});

//$(".card-body").css("display", "none");
//$(".card-body").hide();
/*
	$("#kapiteluebersicht").load("kapiteluebersicht.html");
	*/

	//$("#flipper").hide();

	/* Temporär deaktiviert---------------------------------------

	$( "#clickme" ).click(function() {
		$( "#flipper" ).slideToggle( "slow", function() {
		// Animation complete.
		});
	});

	$(".downloader").children('img').click(function(){
		alert('Demo only, no Download!');
	});

	//löschen
	$(".fahrplan").click(function(){
		$(this).children(".fahrplantext").slideToggle();
	});


	/*Bild-Teaser_Textklapper-----------------------------
	$(".bild-teaser-textklapper .teaser").click(function(){
		$(this).next(".textklapper-schmal").slideToggle();
	});


	/*H-Teaser_Textklapper-----------------------------
	$(".h-teaser-textklapper .teaser").click(function(){
		$(this).next(".klapper").slideToggle();
	});




	$(".bild-teaser-textklapper").click(function(){
		$(this).children(".textklapper-schmal").slideToggle();
	});

	$(".teaser").click(function(){
		$(this).next(".textklapper-schmal").slideToggle();
	});

	-----------------------------------------------------------*/
