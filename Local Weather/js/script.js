//global variables
var tempF, tempC, icon, iconLink, windK, windM;

// get user location via longitude and latitude
function getLocation(position) {
    var lon = position.coords.longtitude,
        lat = position.coords.latitude,
        url = "//api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&units=metric&APPID=e8a7eff06ca5d7d838813379afed1fcd";

    // send api response to html elements
    $.getJSON(url, function (json) {
            $("#city").html(json.name + ", " + json.sys.country);

            //temperature calculations
            tempC = json.main.temp;
            tempF = ((tempC * 1.8) + 32).toPrecision(2);

            $('#cel').html(Math.round(tempC) + " &#8451;");
            $('#fah').html(tempF + " &#8457;");

            // toggle between celcius and fahrenheit
            $('#temp').click(function () {
                $('#cel').toggle();
                $('#fah').toggle();
                $('#kmh').toggle();
                $('#mph').toggle();
            });
        
            $("#sky").html(json.weather[0].description);

            // wind speed calculations
            windK = json.wind.speed;
            windM = (windK * 1.609344).toPrecision(2);
        
            $('#kmh').html(windK + " km/h")
            $("#mph").html(windM + " mph");

            // get weather icon
            icon = (json.weather[0].icon);
            iconLink = "http://openweathermap.org/img/w/";
            $('#icon').html("<img src='" + iconLink + icon + ".png'>");


            //add capability to switch images when weather changes
            switch (icon) {
            case '01d':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?sun")');
                    
                break;
            case '01n':
                $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?moon")');
                break;
            case '02d':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?sun, cloud")');
                    break;
            case '02n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?night,cloud")');
                break;
            case '03d':
            case '03n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?cloud")');
                break;
            case '04d':
            case '04n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?dark,cloud")');
                break;
            case '09d':
            case '09n':
            case '10d':
            case '10n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?rain")');
                break;
            case '11d':
            case '11n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?storm")');
                break;
            case '13d':
            case '13n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?snow")');
                break;
            case '50d':
            case '50n':
                    $('body').css('background-image', 'url("https://source.unsplash.com/1600x900/?fog")');
                break;
            }
        }

    );
}

$(document).ready(function () {
    //check to see if geolocation is supported and get location.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation);
    } else {
        ("#city").innerHTML = "Your browser does not support GeoLocation.";
    }


});