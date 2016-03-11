$(document).ready(function () {

    // store data and inputs
    var displayValue = 0,
        inputVal = "",
        answer = "";

    // display zero if there are no inputs or if cleared
    if (document.getElementById("display").innerHTML === "" || inputVal == "") {
        document.getElementById("display").innerHTML = displayValue;
    }

    //FUNCTIONS

    //clear values with AC button
    function clear() {
        $('#clearAll').on('click', function () {
            inputVal = "";
            answer = "";
        });
    }

    // clear last number input with CE button
    function backspace() {
        $('#backspace').on('click', function () {
            inputVal = inputVal.slice(0, -1);
            $('#display').html(inputVal);
        });
    }
    


    // get value from button click
    $("button").on('click', function () {
        var fromBtn = $(this).attr("value");
        if (parseFloat(fromBtn) == fromBtn) {
            inputVal += fromBtn;
            $('#display').html(inputVal);
        } else if (fromBtn === "+" || fromBtn === "-" || fromBtn === "*" || fromBtn === "/") {
            inputVal += fromBtn;
            $('#display').html(inputVal);
        } else if (fromBtn == "%") {
            var perc = eval(inputVal);
            inputVal = perc / 100;
            $('#display').html(inputVal);
        } else if (fromBtn == "=") {
            answer = eval(inputVal);
            $('#display').html(answer);
            inputVal = "";
        } else if (fromBtn === "AC") {
            clear();
            document.getElementById("display").innerHTML = displayValue;
        } else if (fromBtn === "CE") {
            backspace();
        }



    });





});