// script.js


function narrowSearch() {
    var $specificSearch = $('#specificSearch');
    var $specificArt = $('#specificArt');

    $specificSearch.text("");
    $specificArt.text("");

    var searchTerm = $('#specificSearch').val();

    var specificUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=wikiCallback";

    var wikiRequestTimeout = setTimeout(function () {
        $('#specificArt').text('Failed to load Wikipedia search');
    }, 10000);

    $.ajax({
        url: specificUrl,
        dataType: "jsonp",
        success: function (response) {
            
            
            var wikiTitles = response[1];
            var wikiArticles = response[2];
            
            for(var i = 0; i < wikiTitles.length; i++) {
                titlestr = wikiTitles[i];
                articlestr = wikiArticles[2];
                
                var wholeUrl = "http://en.wikipedia.org/wiki/" + titlestr;
                var wikiTitle = $('#specificArt').append('<h4><a href="' + wholeUrl + '" target="_blank">' + titlestr + '</a></h4><article>' + articlestr + '</article>');
                
                
            }    
            
            
            /*
            for (var i = 0; i < wikiTitle.length; i++) {

                for (var j = 0; j < wikiArticle.length; j++) {
                    titlestr = wikiTitle[i];
                    articlestr = wikiArticle[j];
                    var wholeUrl = "http://en.wikipedia.org/wiki/" + titlestr;
                    if (wikiArticle[j] !== "") {
                        $('#specificArt').append('<h4><a href="' + wholeUrl + '" target="_blank">' + titlestr + '</a></h4><article>' + articlestr + '</article>');
                    };
                };
            };
            */
            clearTimeout(wikiRequestTimeout);
        }
    }); // end ajax
} // end narrowSearch()

function buttonToggle() {
    $('h1').toggle("slow");
    $('h3').toggle("slow");

    // clear #specificArt when toggle back to main screen

}


$(document).ready(function () {

    var $input = $('input');

    // search icon toggle to search bar
    $('.fa').on('click', function () {
        $('input').toggle("slow");
        document.getElementById('searchbox').focus();
    });


    $(document).keypress(function (e) {
        if (e.which === 13) {
            if ($('#searchbox').val() === "") {
                // add mod box
                alert("Please enter a search term");
            } else if ($input.text !== "") {
                buttonToggle();
                narrowSearch();
            }
        }
    });


}); // end document ready