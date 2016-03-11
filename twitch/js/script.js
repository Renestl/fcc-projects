// script.js

$(function () {



    var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "OgamingSC2", "ESL_SC2", "cretetion", "sheevergaming", "TR7K"];

    for (var i = 0; i < streamers.length; i++) {
        var streamer = streamers[i];


        $.getJSON('https://api.twitch.tv/kraken/streams/' + streamers[i] + '?callback=?', function (data) {

            var avatar,
                username,
                game;

            if (data.stream !== null) {

                avatar = data.stream.channel.logo,
                    username = data.stream.channel.display_name,

                    $('#online').append("<section id='online'><span class='avatar'><img src='" + avatar + "'></span><span class='info'><span class='username'><a href='http://www.twitch.tv/" + username + "' target='_blank'>" + username + "</a></span><span class='game'>" + data.stream.channel.status + "</span></span></section>");

            } // end if data.stream !== null

            if (data.stream === null) {

                $.getJSON(data._links.channel + '?callback=?', function (data1) {

                    if (data1.logo !== null) {
                        $('#offline').append("<section id='offline'><span class='avatar'><img src='" + data1.logo + "'></span><span class='info'><span class='username'><a href='http://www.twitch.tv/" + data1.name + "' target='_blank'>" + data1.name + "</a></span><span class='game'>" + 'offline' + "</span></span></section>");
                    }

                        if(data1.logo === null) {
                            $('#noAccount').append("<section id='noAccount'><span class='avatar'><img src='http://res.cloudinary.com/ronanland/image/upload/v1457515801/fog_lrmump.jpg'></span><span class='info'><span class='username'><a href='http://www.twitch.tv/" + data1.name + "' target='_blank'>" + data1.name + "</a></span><span class='game'>" + 'Account Closed' + "</span></span></section>");
                        }

                    }) // end getJSON null
            } // end if data.stream === null
            



            $('#allStreams').click(function () {
                $('#online').show();
                $('#offline').show();
                $('#noAccount').show();
            });

            $('#onlineStreams').click(function () {
                $('#online').show();
                $('#offline').hide();
                $('#noAccount').hide();
            });

            $('#offlineStreams').click(function () {
                $('#online').hide();
                $('#offline').show();
                $('#noAccount').hide();
            });
        }); // end main getJSON
    }; // end for loop

}); // end document function