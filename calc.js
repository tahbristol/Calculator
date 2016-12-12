$(function() {
     var value = document.getElementsByTagName("p")[0].childNodes;
     console.log(value);
     var length = document.getElementsByTagName("p")[0].childNodes.length;

     var current =0;
     var memory, result, operator, str;
     str = "";
     memory = 0;


    //starting with a clear screen and binding the clear button.
<<<<<<< HEAD
    $('.screen').text("");

    function add(M,C){
        M=parseInt(M);
        C = parseInt(C);
        result = M +C;
        return result;
    }

    function addToScreen(pressed){
          return $('.screen').append(pressed);

    }

    $('#add').on('click',function(){
        operator = "+";
         addToScreen(operator);
         for(var val=0; val<value.length; val++){

             str = str+ value[val].nodeValue;
         }
         console.log(str);
         current = parseInt(str);

        // console.log(current);
        // console.log(typeof current);
         memory = current;
         current = 0;
         str = "";


    });

    $('#clear').on('click', function() {
        $('.screen').text("");
        current = 0;
        memory = current;
        str = "";
        result = 0;
        operator = "";


=======
    $('.screen').text('');

    $('#clear').on('click', function() {
        $('.screen').text('');
>>>>>>> 6789d7fa2ef6bd1d070e4cbe65fc8831a53d7ea0
    });


    $('#1').on('click', function() {
<<<<<<< HEAD
        var num = 1;

        addToScreen(num);

    });

    $('#2').on('click', function() {
        var num = 2;
        addToScreen(num);


    });
    $('#3').on('click', function() {
        var num = 3;
        addToScreen(num);


    });

    $('#4').on('click', function() {
        var num = 4;
        addToScreen(num);


    });

    $('#5').on('click', function() {
        var num = 5;
        addToScreen(num);


    });

    $('#6').on('click', function() {
        var num = 6;
        addToScreen(num);


    });

    $('#7').on('click', function() {
        var num = 7;
        addToScreen(num);
=======
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
>>>>>>> 6789d7fa2ef6bd1d070e4cbe65fc8831a53d7ea0

	$('#9').on('click', function() {
     var num = 9;
        $('.screen').append(document.createTextNode(num));


    });


	$('#0').on('click', function() {
     var num = 0;
        $('.screen').append(document.createTextNode(num));


    });

    });

    $('#8').on('click', function() {
        var num = 8;
        addToScreen(num);


    });

    $('#9').on('click', function() {
        var num = 9;
        addToScreen(num);


    });


    $('#0').on('click', function() {
        var num = 0;
        addToScreen(num);


    });



    $('#delete').on('click', function(){
        $('.screen').text("");





    });

    $('#equals').on('click', function(){
        for(var va=0; va<value.length; va++){

            str += value[va].nodeValue;
        }
        current = parseInt(str);
         $('.screen').text("");
         console.log(memory + " " + current);
        console.log(add(memory,current));
        addToScreen(add(memory,current));
        memory = result
        result = 0;
        current = 0;
         str = "";

    });

    $('#decimal').on('click', function(){

        var  sign = ".";
        addToScreen(sign);




    });




});
