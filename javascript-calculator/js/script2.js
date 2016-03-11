$(document).ready(function () {

    // store data and inputs
    var displayValue = 0,
        inputVal = [],
        display = $('#display'),
        answer = "",
        inputVal2 = [],
        operation = "";
    
    // initial value of the display
    document.getElementById("display").innerHTML = displayValue;


    //get value from btn click
    $('.numr').on('click', function () {
        var numbr = parseFloat($(this).val());
        //store value
        inputVal += numbr;
        // show value on calculator
        document.getElementById("display").innerHTML = inputVal;

    });



    // add numbers
    function addIt() {
        $('#addition').on('click', function () {
            answer = parseFloat(inputVal);
            inputVal = 0;
            answer += parseFloat(inputVal);
        });
    }


    // subtract numbers
    function subtractIt() {
        $('#subtraction').on('click', function () {

        });
    }

    // multiply numbers
    function multiplyIt() {
        $('#multiply').on('click', function () {

        });
    }

    //divide numbers
    function divideIt() {
        $('#division').on('click', function () {

        });
    }

    // make numbers percentage
    $('#percentage').on('click', function () {
        var perc = inputVal / 100;
        document.getElementById("display").innerHTML = perc;

    });

    // evaluate answer
    function evalutateIt() {
        $('#equals').on('click', function () {

        });
    }


    // clear values with AC button
    function clear() {
        $('#clearAll').on('click', function () {
            display.html(displayValue);
            inputVal = "";

        });
    }

    // backspace values with CE button
    function cE() {
        $('#backspace').on('click', function () {
            inputVal = inputVal.slice(0, inputVal.length - 1);
            document.getElementById("display").innerHTML = inputVal;

            if (inputVal === "") {
                $('#display').html(displayValue);
            }
        });
    }


    if (inputVal === ".numr") {
        inputVal.push();
    } else if (inputVal === "+") {
        addIt();
    } else if (inputVal === "-") {
        subtractIt();
    } else if (inputVal === "#clearAll") {
        clear();
    } else if (inputVal === "#backspace") {
        cE();
    }

    

    function listInput() {
        var i = 0;
        for (i = 0; i < inputVal2.length; i++) {
            answer += inputVal2[i];
        }
    }

    
    


    // clear values with AC button
    function clear() {
        inputVal = "";
        operation = "";
        document.getElementById('display').innerHTML = "0";
    }

    // backspace values with CE button
    function backspace() {
        $('#backspace').on('click', function () {
            inputVal = inputVal.slice(0, inputVal.length - 1);
            document.getElementById("display").innerHTML = inputVal;

            if (inputVal === "") {
                $('#display').html(displayValue);
            }
        });
    }



    $('button').on('click', function () {
        if (operation === "") {
            operation = $(this).val();
        }
    });

    // add numbers
    function addIt() {
        operation = parseFloat(inputVal);
    }
    //subtract numbers

    //divide numbers

    // multiply numbers

    // multiply by 100 for percent
    function perc() {
        inputVal /= 100;
    }

    switch (operation) {
    case '#addition':

        break;
    case "subtraction":

        break;
    case "*":

        break;
    case "/":

        break;
    case "=":

        break;
    case "clearAll":
        clear('display');
        break;
    case "backspace":
        backspace('display');
        break;
    }
});