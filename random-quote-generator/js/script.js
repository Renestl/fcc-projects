$(document).ready(function() {
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
	
	function getQuote(data) {
		var quote = data.quoteText;
		var author = data.quoteAuthor;
		$('#showQuote').text(quote);
		$('#author').text(author);
	}

	function newQuote() {
		$.getJSON(url, getQuote, 'jsonp');
	}

	function send() {

    	var quote = $('#showQuote').text();
    	var author = $('#author').text();
    	var link = 'https://twitter.com/intent/tweet?button_hashtag=BookQuotes' + quote + ' Author: ' + author;
    	$('#tweet').attr('href', link)

  }

  newQuote();

  	$('#newQuote').on('click', newQuote);
  	$('#tweet').on('click', send);
	
});


/*
$(document).ready(function() {
	var url = "https://andruxnet-random-famous-quotes.p.mashape.com/cat={books}";
	
	function getQuote(data) {
		var quote = data.quoteText;
		var author = data.quoteAuthor;
		$('#showQuote').text(quote);
		$('#author').text(author);
	}

	function newQuote() {
		$.getJSON(url, getQuote, 'jsonp');
	}

	function send() {

    	var quote = $('#showQuote').text();
    	var author = $('#author').text();
    	var tweet = 'https://twitter.com/intent/tweet?text=' + quote + ' Author: ' + author;
    	$('#tweet').attr('href', tweet)

  }

  newQuote();

  	$('#newQuote').on('click', newQuote);
  	$('#tweet').on('click', send);
	
});
*/

$("#newQuote").click(function() {
$.ajax({
  url:'https://andruxnet-random-famous-quotes.p.mashape.com/cat=books', 
  contentType: 'application/x-www-form-urlencoded', 
  method:"GET", 
  headers:{"X-Mashape-Key":" h7V07QuefKmshWSubQcuyQPqKmYpp14oULhjsn9BsRuLlxNBNk"}, 
  accept:'application/json',
})
  .done(function (data){
  	var quote = data.quoteText;
		var author = data.quoteAuthor;
		$('#showQuote').text(quote);
		$('#author').text(author);
   $("#showQuote").html(data);
	}); 
});
  /*alert("Data Saved: " + data ); 
  */

$(document).ready(function() {

var url = "https://andruxnet-random-famous-quotes.p.mashape.com/cat=books"
var getQuote = function(data) {
        var quote = $(data).find('quote');
        var author = $(data).find('author');

        $('#showQuote').text(data.quote);
        $('#author').text(data.author);
var endQuote
    //get a random quote from andrux.net 
    //(https://market.mashape.com/andruxnet/random-famous-quotes)
    $.ajax({
        url,
        contentType: 'application/x-www-form-urlencoded',
          dataType: "json",
          method: "GET",
          headers: {
            "X-Mashape-Key": " h7V07QuefKmshWSubQcuyQPqKmYpp14oULhjsn9BsRuLlxNBNk"
          },
          accept: 'application/json',
      })
      .done(function(data) {
        var quote = $(data).find('quote');
        var author = $(data).find('author');

        $('#showQuote').text(data.quote);
        $('#author').text(data.author);
      })
      .always(function() {
      
      
        $('#showQuote').text(data.quote);
        $('#author').text(data.author);
      })
 
    //get new quote on button click
  $("#newQuote").click(function() {
    $.ajax(url,  ,'json');
    
  });
});