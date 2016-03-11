$(document).ready(function() {

  var ajaxOptions = {
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=books",
      contentType: 'application/x-www-form-urlencoded',
      dataType: "json",
      method: "GET",
      headers: {
        "X-Mashape-Key": " h7V07QuefKmshWSubQcuyQPqKmYpp14oULhjsn9BsRuLlxNBNk"
      },
      accept: 'application/json',
    }
    //get a random quote from andrux.net 
    //(https://market.mashape.com/andruxnet/random-famous-quotes)
  $.ajax(ajaxOptions);
   done(function(data) {
   var quote = $(data).find('quote');
      var author = $(data).find('author');

      $('#showQuote').text(data.quote);
      $('#author').text(data.author);
    })

  //get new quote on button click
  $("#newQuote").click(function() {
    return siteQuote;
  });

  var endQuote = 'https://twitter.com/intent/tweet?text=' + data.quote + '~' + data.author;

});