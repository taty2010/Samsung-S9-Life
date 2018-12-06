$(document).ready(function(){
	/**$("#aboutLink").fadeIn(2000);**/
	
	
	$(window).scroll(function() {

    if ($(window).scrollTop()>200)
     {
        $('#intro').fadeTo("slow", 1);
     }	
			
		});
	
/****** Original Javascript Code ********
var outdoorBttn = document.getElementById("outdoorBttn");
var element = document.getElementById("work");
var i = document.getElementById("i");
var i2 = document.getElementById("i2");
var iPet = document.getElementById("i-pet");
var iPet2 = document.getElementById("i2-pet");
var iArt = document.getElementById("i-art");
var iArt2 = document.getElementById("i2-art");
*****/
var outdoorDisplay = false;
var artDisplay = false;
var doggyDisplay = false;


$("#outdoorBttn, #outdoorBttnup").click(function(){
         if	(outdoorDisplay === false)
			 {
			outdoorDisplay = true;
			$("#work").slideDown("slow");
			$("#parallax").css("height", "50px");
			/**$(".dropdown1").css({"margin-top": "51.5vw", "opacity": "1"});**/
			$(".dropdown1").hide();	 
			 }
	
		else {
			outdoorDisplay = false;
        	$("#work").slideUp("slow");
			$("#parallax").removeAttr("style");
			/**$(".dropdown1").css({"margin-top": "15%", "opacity": "1"});**/
			$(".dropdown1").show();
		}
    	});	
	

$("#doggyBttn, #doggyBttnup").click(function(){
         if	(doggyDisplay === false)
			 {
			doggyDisplay = true;
			 $("#doggy").slideDown("slow");
			$(".parallax2").css("height", "50px");
			$(".dropdown2").hide();
			 }
	
		else {
			doggyDisplay = false;
        	$("#doggy").slideUp("slow");
			$(".parallax2").removeAttr("style");
			$(".dropdown2").show();
		}
    	});	
	
$("#artBttn, #artBttnup").click(function(){
         if	(artDisplay === false)
			 {
			artDisplay = true;
			 $("#art").slideDown("slow");
			$(".parallax3").css("height", "10px");
			$(".dropdown3").hide();
			 }
	
		else {
			artDisplay = false;
        	$("#art").slideUp("slow");
			$(".parallax3").removeAttr("style");
			$(".dropdown3").show();
		}
    	});	
	
	
/** Original Javascript Code ********
var hide = function() {
	
	if (outdoorDisplay === false) {
		outdoorDisplay = true;
		i.style.display = "none";
		i2.style.display = "contents";
		i2.style.marginTop = "10px";
		
	}
	
	
	else {
		outdoorDisplay = false;
		i.style.display = "contents";
		i2.style.display = "none";
	}
};



outdoorBttn.addEventListener('click', hide);


var doggyBttn = document.getElementById("doggyBttn");
var doggy = document.getElementById("doggy");
var doggyDisplay = false;

var hide = function() {
	
	if (doggyDisplay === false) {
		doggyDisplay = true;
		iPet.style.display = "none";
		iPet2.style.display = "contents";
	}
	
	
	else {
		doggyDisplay = false;
		iPet.style.display = "contents";
		iPet2.style.display = "none";
	}
};
	
doggyBttn.addEventListener('click', hide);


var navBttn = document.getElementById("navBttn");
var openNavBar = document.getElementById("openNavBar");
var closedNavBar = document.getElementById("navBars");
var navigation = document.getElementById("navigation");

var menu = false;

var nav = function() {
	
	if (menu === false) {
		menu = true;
		closedNavBar.style.display = "none";
		openNavBar.style.display = "contents";
		navigation.style.display = "contents";
	}
	
	
	else {
		menu = false;
		closedNavBar.style.display = "contents";
		openNavBar.style.display = "none";
		navigation.style.display = "none";
		
	}
};


navBttn.addEventListener('click', nav);**/

});

