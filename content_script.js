// document.body.style.backgroundColor="red"

// jQuery.fn.highlight=function(c){function e(b,c){var d=0;if(3==b.nodeType){var a=b.data.toUpperCase().indexOf(c),a=a-(b.data.substr(0,a).toUpperCase().length-b.data.substr(0,a).length);if(0<=a){d=document.createElement("span");d.className="highlight";a=b.splitText(a);a.splitText(c.length);var f=a.cloneNode(!0);d.appendChild(f);a.parentNode.replaceChild(d,a);d=1}}else if(1==b.nodeType&&b.childNodes&&!/(script|style)/i.test(b.tagName))for(a=0;a<b.childNodes.length;++a)a+=e(b.childNodes[a],c);return d} return this.length&&c&&c.length?this.each(function(){e(this,c.toUpperCase())}):this};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode)replaceChild(this.firstChild,this),normalize()}).end()};

//if ($(".yay").length > 0) { $("p").removeHighlight(); }
if ($(".emoHighlight1").length > 0 || 
	$(".emoHighlight2").length > 0 || 
	$(".emoHighlight3").length > 0 || 
	$(".emoHighlight4").length > 0 || 
	$(".emoHighlight5").length > 0 ||  
	$(".emoHighlight6").length > 0 ||  
	$(".emoHighlight7").length > 0 ||  
	$(".emoHighlight8").length > 0 ||  
	$(".emoHighlight9").length > 0 ||  
	$(".emoHighlight10").length > 0 ||  
	$(".emoHighlight11").length > 0 ||  
	$(".emoHighlight12").length > 0 ||  
	$(".emoHighlight13").length > 0) { 
	$("p").removeHighlight('emoHighlight1'); 
	$("p").removeHighlight('emoHighlight2');
	$("p").removeHighlight('emoHighlight3');
	$("p").removeHighlight('emoHighlight4');
	$("p").removeHighlight('emoHighlight5');
	$("p").removeHighlight('emoHighlight6');
	$("p").removeHighlight('emoHighlight7');
	$("p").removeHighlight('emoHighlight8');
	$("p").removeHighlight('emoHighlight9');
	$("p").removeHighlight('emoHighlight10');
	$("p").removeHighlight('emoHighlight11');
	$("p").removeHighlight('emoHighlight12');
	$("p").removeHighlight('emoHighlight13');
	}
else if ($(".sensaHighlight1").length > 0 ||
		 $(".sensaHighlight2").length > 0 ||
		 $(".sensaHighlight3").length > 0 ||
		 $(".sensaHighlight4").length > 0 ||
		 $(".sensaHighlight5").length > 0 ||
		 $(".sensaHighlight6").length > 0 ||
		 $(".sensaHighlight7").length > 0 ||
		 $(".sensaHighlight8").length > 0 ||
		 $(".sensaHighlight9").length > 0 ||
		 $(".sensaHighlight10").length > 0 ||
		 $(".sensaHighlight11").length > 0 ||
		 $(".sensaHighlight12").length > 0 ||
		 $(".sensaHighlight13").length > 0 ||
		 $(".sensaHighlight14").length > 0 ||
		 $(".sensaHighlight15").length > 0 ||
		 $(".sensaHighlight16").length > 0 ||
		 $(".sensaHighlight17").length > 0 ||
		 $(".sensaHighlight18").length > 0 ||
		 $(".sensaHighlight19").length > 0 ||
		 $(".sensaHighlight20").length > 0 ||
		 $(".sensaHighlight21").length > 0 ||
		 $(".sensaHighlight22").length > 0) {
			$("p").removeHighlight('sensaHighlight1');
			$("p").removeHighlight('sensaHighlight2');
			$("p").removeHighlight('sensaHighlight3');
			$("p").removeHighlight('sensaHighlight4');
			$("p").removeHighlight('sensaHighlight5');
			$("p").removeHighlight('sensaHighlight6');
			$("p").removeHighlight('sensaHighlight7');
			$("p").removeHighlight('sensaHighlight8');
			$("p").removeHighlight('sensaHighlight9');
			$("p").removeHighlight('sensaHighlight10');
			$("p").removeHighlight('sensaHighlight11');
			$("p").removeHighlight('sensaHighlight12');
			$("p").removeHighlight('sensaHighlight13');
			$("p").removeHighlight('sensaHighlight14');
			$("p").removeHighlight('sensaHighlight15');
			$("p").removeHighlight('sensaHighlight16');
			$("p").removeHighlight('sensaHighlight17');
			$("p").removeHighlight('sensaHighlight18');
			$("p").removeHighlight('sensaHighlight19');
			$("p").removeHighlight('sensaHighlight20');
			$("p").removeHighlight('sensaHighlight21');
			$("p").removeHighlight('sensaHighlight22');
			
			$("p").highlight(' outrage ', 'emoHighlight1');
			$("p").highlight(' death ', 'emoHighlight2');
			$("p").highlight(' regret ', 'emoHighlight3');
			$("p").highlight(' beloved ', 'emoHighlight4');
			$("p").highlight(' killing ', 'emoHighlight5');
			$("p").highlight(' scorned ', 'emoHighlight6');
			$("p").highlight(' Best ', 'emoHighlight7');
			$("p").highlight(' loving ', 'emoHighlight8');
			$("p").highlight(' successfully ', 'emoHighlight9');
			$("p").highlight(' happy ', 'emoHighlight10');
			$("p").highlight(' threatening ', 'emoHighlight11');
			$("p").highlight(' grateful ', 'emoHighlight12');
			$("p").highlight(' awesome ', 'emoHighlight13');
			$(".emoHighlight1").css({ backgroundColor: "#Dab4b4" });
			$(".emoHighlight2").css({ backgroundColor: "#Dab4b4" });
			$(".emoHighlight3").css({ backgroundColor: "#F6DCDC" });
			$(".emoHighlight4").css({ backgroundColor: "#91A9DF" });
			$(".emoHighlight5").css({ backgroundColor: "#DF9191" });
			$(".emoHighlight6").css({ backgroundColor: "#DF9191" });
			$(".emoHighlight7").css({ backgroundColor: "#91A9DF" });
			$(".emoHighlight8").css({ backgroundColor: "#91A9DF" });
			$(".emoHighlight9").css({ backgroundColor: "#DBE1F6" });
			$(".emoHighlight10").css({ backgroundColor: "#B4BFDA" });
			$(".emoHighlight11").css({ backgroundColor: "#Dab4b4" });
			$(".emoHighlight12").css({ backgroundColor: "#B4C1DA" });
			$(".emoHighlight13").css({ backgroundColor: "#91A9DF" });
}
		 
else {

	$("p").highlight(' outrage ', 'emoHighlight1');
	$("p").highlight(' death ', 'emoHighlight2');
	$("p").highlight(' regret ', 'emoHighlight3');
	$("p").highlight(' beloved ', 'emoHighlight4');
	$("p").highlight(' killing ', 'emoHighlight5');
	$("p").highlight(' scorned ', 'emoHighlight6');
	$("p").highlight(' Best ', 'emoHighlight7');
	$("p").highlight(' loving ', 'emoHighlight8');
	$("p").highlight(' successfully ', 'emoHighlight9');
	$("p").highlight(' happy ', 'emoHighlight10');
	$("p").highlight(' threatening ', 'emoHighlight11');
	$("p").highlight(' grateful ', 'emoHighlight12');
	$("p").highlight(' awesome ', 'emoHighlight13');
	$(".emoHighlight1").css({ backgroundColor: "#Dab4b4" });
	$(".emoHighlight2").css({ backgroundColor: "#Dab4b4" });
	$(".emoHighlight3").css({ backgroundColor: "#F6DCDC" });
	$(".emoHighlight4").css({ backgroundColor: "#91A9DF" });
	$(".emoHighlight5").css({ backgroundColor: "#DF9191" });
	$(".emoHighlight6").css({ backgroundColor: "#DF9191" });
	$(".emoHighlight7").css({ backgroundColor: "#91A9DF" });
	$(".emoHighlight8").css({ backgroundColor: "#91A9DF" });
	$(".emoHighlight9").css({ backgroundColor: "#DBE1F6" });
	$(".emoHighlight10").css({ backgroundColor: "#B4BFDA" });
	$(".emoHighlight11").css({ backgroundColor: "#Dab4b4" });
	$(".emoHighlight12").css({ backgroundColor: "#B4C1DA" });
	$(".emoHighlight13").css({ backgroundColor: "#91A9DF" });
}

// $('#span').removeHighlight();	
	
// Will highlight each keyword "the" in the context ".test"
// It will ignore all keywords inside ".noHighlight" and ".ignore".
// The wrapper element will be a "em"-element with the class "customHighlight"
// $("div").jmHighlight("the", {
     // // Optional
    // "filter": [],
    // // Optional. Default is "span"
    // "element": "em",
    // // Optional. Default is "highlight"
    // "className": "customHighlight",
    // // Optional: If your search keyword is more than one word
    // // separeted with a blank, you can define this property with true
    // // if you want a separeted search for the keywords. If you define
    // // nothing the default value is false, so it will be searched
    // // for the complete term
    // "separateWordSearch": true,
    // // if diacritics should be matched too
    // "diacritics": true, // default true
    // // set "debug" to true if you want to see console logs
    // "debug": true
// });

// $("p").jmHighlight("the", {
     // // Optional
    // "filter": [],
    // // Optional. Default is "span"
    // "element": "em",
    // // Optional. Default is "highlight"
    // "className": "bCustomHighlight",
    // // Optional: If your search keyword is more than one word
    // // separeted with a blank, you can define this property with true
    // // if you want a separeted search for the keywords. If you define
    // // nothing the default value is false, so it will be searched
    // // for the complete term
    // "separateWordSearch": true,
    // // if diacritics should be matched too
    // "diacritics": true, // default true
    // // set "debug" to true if you want to see console logs
    // "debug": true
// });

// $(".customHighlight").css({ backgroundColor: "#FF0000" });
// $(".bCustomHighlight").css({ backgroundColor: "#FF0000" });
// $(".gc-container").css({ backgroundColor: "#0000FF" });
