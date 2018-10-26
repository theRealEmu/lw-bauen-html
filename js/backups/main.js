/**Beispiele


var myHeading = document.querySelector('h1');
myHeading.textContent = 'LW_Bauen aus js!';



**/


/**Hauptteil/////////////////////////////////////////////////////////////////////////////////////////////////**/


$(document).ready(function(){
	/* Hier der jQuery-Code 
	
	$("#kapiteluebersicht").load("kapiteluebersicht.html");
	*/
	
	//$("#flipper").hide();
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
	
		
	/*Bild-Teaser_Textklapper-----------------------------*/
	$(".bild-teaser-textklapper .teaser").click(function(){
		$(this).next(".textklapper-schmal").slideToggle();
	});	
	
		
	/*H-Teaser_Textklapper-----------------------------*/
	$(".h-teaser-textklapper .teaser").click(function(){
		$(this).next(".klapper").slideToggle();
	});
	
	/* Temporär deaktiviert---------------------------------------
	
	$(".bild-teaser-textklapper").click(function(){
		$(this).children(".textklapper-schmal").slideToggle();
	});	
	
	$(".teaser").click(function(){
		$(this).next(".textklapper-schmal").slideToggle();
	});		
	
	-----------------------------------------------------------*/
	
	
	
	/*Fancyboxes-----------------------------*/

	$(".fancybox-pdf").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
        width  : 900,
        height : 800,
        autoSize: false
	});
	
	$(".fancybox-a360").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
        width  : 900,
        height : 800,
        autoSize: false,
		helpers : {
				media : {}
			}
	});
	
	
	
	
	$(".fancybox-img").fancybox({
		openEffect	: 'elastic',
		closeEffect	: 'elastic',
		openSpeed	: 'slow',
		helpers : {
			thumbs : {
            width: 50,
            height: 50
			}
		}		
	});		
	
	
	$(".various").fancybox({
		maxWidth    : 800,
		maxHeight   : 600,
		fitToView   : false,
		width       : '70%',
		height      : '70%',
		autoSize    : false,
		closeClick  : false,
		openEffect  : 'elastic',
		closeEffect : 'none',
		beforeLoad  : function(){
			var url= $(this.element).attr("href");
			url = url.replace(new RegExp("watch\\?v=", "i"), 'v/');
			url += '?fs=1&autoplay=1';
			this.href = url
		}
	});
			
});

	
		
	

/*Tests
	fitToView: false,
		beforeShow: function () {
			this.width = 800;
			this.height = 500;
		}
				
		
		//fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false
		
		helpers : {
    		title : {
    			type : 'over'
    		}
    	}
		
		$(".fancybox-video").fancybox({
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				media : {}
			}
	});
	
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
		
		
		
		
		
		
		
*/
