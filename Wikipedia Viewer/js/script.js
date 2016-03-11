// script.js

function narrowSearch() {
    var $wikiarticle = $('#wikiArticle');

    // clear out old data before new request
    $wikiarticle.text("");

    var searchTerm = $('#searchbox').val();

    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback";

    var wikiRequestTimeout = setTimeout(function () {
        $wikiarticle.text('Failed to load Wikipedia articles.');
    }, 10000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        success: function (response) {
            var wikiTitle = response[1];
            var wikiArticle = response[2];
            var wikiUrl = response[3];

            //var wholeUrl = "http://en.wikipedia.org/wiki/" + wikiTitle;

            for (var i = 0; i < response[1].length; i++) {
                $('#wikiArticle').append('<div class="alternate"><h4><a href="' + wikiUrl[i] + '" target="_blank">' + wikiTitle[i] + '</a></h4><article>' + wikiArticle[i] + '</article></div>');                

            };

            clearTimeout(wikiRequestTimeout);
        }


    }); // end ajax

} // end narrowSearch()


function buttonToggle() {
    $('h1').toggle("slow", function () {
        // clear #specificArt when toggle back to main screen
        if ($('h1').is(":visible")) {
            $('#wikiarticle').text("");
        }
    });
    $('h3').toggle("slow");
}

$(document).ready(function () {

    // search icon toggle to search bar
    $('.fa').on('click', function () {
        $('input').toggle("slow");
        document.getElementById('searchbox').focus();
    });

    $(document).keypress(function (e) {
        if (e.which === 13) {
            buttonToggle();
            narrowSearch();
        }
    }); // end keypress function



}); //end document.ready