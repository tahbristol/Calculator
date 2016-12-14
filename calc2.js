$(document).ready(function() {
    /*=== Variables === */
    var current = "";
    var memory = "";
    var result = "";
    var operator = "";


    /*=== Number Buttons ===*/

    $('#1').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);
        console.log(current);
    });

    $('#2').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });
    $('#3').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    $('#4').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    $('#5').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    $('#6').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    $('#7').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);

    });

    $('#8').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    $('#9').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });


    $('#0').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    /* === Clears === */

    $('#clear').on('click', function() {
        $('.screen').text("");
        current = "";
        memory = "";
        operator = "";
    });


    $('#delete').on('click', function() {
        $('.screen').text("");
        current = "";
    });


    /* === Equals === */
    $('#equals').on('click', function() {
        if (operator === "+") {
            current = parseInt(current);
            memory = parseInt(memory);
            result = memory + current;
            result = result.toString();
            $('.screen').text(result);
            memory = result;
            console.log("mem after result" + memory);
            current = "";
            operator = "";
            //result = "";

            console.log("Memo" + memory);
            console.log("result" + result);
            console.log("curr" + current);
            console.log("oper" + operator);

        }

    });

    /* === Decimal ===*/

    $('#decimal').on('click', function() {

        var sign = ".";
        addToScreen(sign);

    });

    /* === Operator Events ===*/

    $('#add').on('click', function() {
        console.log("curr b4 reset" + current);
        if (memory === "") {
            memory = current;
        } else {
            memory = memory;
            result = "";
        }
        operator = "+";
        current = "";
        $('.screen').text(operator);

        console.log("Memo" + memory);
        console.log("result" + result);
        console.log("curr" + current);
        console.log("oper" + operator);
    })






});
