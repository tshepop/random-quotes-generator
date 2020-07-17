let quote = document.getElementById("quote");
let showQuote = document.getElementById("showQuote");

$(document).ready(function(){
	$("#showQuote").on('click', function(){
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response){
			quote.innerHTML = response.quoteText;
		})
	})
})

