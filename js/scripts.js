let quote = document.getElementById("quote");
let author = document.getElementById("author");
let button = document.getElementById("getQuotes");


//$(document).ready(function(){
//	$("#showQuote").on('click', function(){
//		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response){
//			quote.innerHTML = response.quoteText;
//		})
//	})
//})

// Refactor code...

function getQuote(){
	let url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
	
	$.getJSON(url, (response) => {
		quote.textContent = response.quoteText;
		author.textContent = response.quoteAuthor;
	})
}

button.addEventListener("click", getQuote);

//showQuote.addEventListener('click', function(){
//$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response){
//		quote.textContent = response.quoteText;
//		console.log(response)
//	})
//})
