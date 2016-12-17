$(document).ready(function() {
    /*=== Variables === */
    var current = "";

    var result = "";



    /*=== Number Buttons ===*/

    $('#1').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);

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


    $('#zero').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);


    });

    /* === Clears === */

    $('#clear').on('click', function() {
        $('.screen').text("");
        current = "";

    });


    $('#delete').on('click', function() {
        $('.screen').text("");


    });


    /* === Equals === */
    $('#equals').on('click', function() {

        //evaluate expression on screen and set the result to the current screen entry
        var entry = current;
        result = eval(entry);
        $('.screen').text(result);
        current = result;


    });

    /* === Decimal ===*/

    $('#decimal').on('click', function() {

        var sign = ".";
        addToScreen(sign);

    });

    /* === Operator Events ===*/

    $('#add').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);
    });

    $('#subtract').on('click', function() {

        current += $(this).text();
        $('.screen').text(current);



    });

    $('#multiply').on('click', function() {
        current += "*"
        $('.screen').text(current);
    });

    $('#divide').on('click', function() {
        current += $(this).text();
        $('.screen').text(current);
    });





});
