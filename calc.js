$(function() {

    //starting with a clear screen and binding the clear button.
    $('.screen').text('');

    $('#clear').on('click', function() {
        $('.screen').text('');
    });


    $('#1').on('click', function() {
     var num = 1;
        $('.screen').append(document.createTextNode(num));

    });
	
	$('#2').on('click', function() {
     var num = 2;
        $('.screen').append(document.createTextNode(num));


    });
    $('#3').on('click', function() {
     var num = 3;
        $('.screen').append(document.createTextNode(num));


    });

	$('#4').on('click', function() {
     var num = 4;
        $('.screen').append(document.createTextNode(num));


    });
	
	$('#5').on('click', function() {
     var num = 5;
        $('.screen').append(document.createTextNode(num));


    });

	$('#6').on('click', function() {
     var num = 6;
        $('.screen').append(document.createTextNode(num));


    });

	$('#7').on('click', function() {
     var num = 7;
        $('.screen').append(document.createTextNode(num));


    });

	$('#8').on('click', function() {
     var num = 8;
        $('.screen').append(document.createTextNode(num));


    });

	$('#9').on('click', function() {
     var num = 9;
        $('.screen').append(document.createTextNode(num));


    });


	$('#0').on('click', function() {
     var num = 0;
        $('.screen').append(document.createTextNode(num));


    });





});
