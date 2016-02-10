/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
$(document).ready(function(){        
    $("#about-me-content").fadeIn();
    //TODO- update the scroll 
//    $(window).scroll( function(){
//        if($(window).scrollTop() != 0){
//                $("#burger-wrap").css("visibility", "visible");
//        }
//        else{
//                $("#burger-wrap").css("visibility", "hidden");
//        }
//    });
    
    
    //exit current app with the X button
    $(".project-app-close").live("click", function(){
                $(".project-app-close").parent().fadeOut("slow");            
    });
    
    //tic tac toe game app
    game();
    $("button").click(function () {
        reset();
    });

function game() {
    var step = 0;
    var winBool = false;
    var drawCount = 0;
    var playerCount = 0;
    var botWin = 0;
    var isDrawOutput = false;

    $('.freeSpot').click(function () {
        if ($(this).attr("class") == "freeSpot") { 
            $(this).attr('class', "marked");
            $(this).html("X");
            winBool = checkWin();
            if (winBool == true) {
                playerCount++;
                $('#playerWin').text("Player wins: " + playerCount);
                reset();
            }      
            botTurn();
            if (isDraw()) { 
                drawCount++;
                $('#draw').text("Draw: " + drawCount);
                reset();
            }
        }
    });
    //The bot's turn    
    function botTurn() {
        var Q = $('#Q').text();
        var W = $('#W').text();
        var E = $('#E').text();
        var A = $('#A').text();
        var S = $('#S').text();
        var D = $('#D').text();
        var Z = $('#Z').text();
        var X = $('#X').text();
        var C = $('#C').text();
        if ((S != "X") && (isFilled(S) == false)) {
            $("#S").attr("class", 'botMarked');
            $("#S").html("O");
            return;
        }
        if (isFilled(S)) {
            checkWinMove();
        }
        if (checkWin()) {
            botWin++;
            $('#botWin').html("Bot wins: " + botWin);
            reset();
        }        
        function checkWinMove() {
            //qwe win 
            if ((Q == "O") && (W == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((W == "O") && (E == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "O") && (E == "O") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            //asd win
            else if ((A == "O") && (S == "O") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((S == "O") && (D == "O") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            //zxc win
            else if ((Z == "O") && (X == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z == "O") && (C == "O") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((X == "O") && (C == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
        //qaz win
            else if ((Q == "O") && (A == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((A == "O") && (Z == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "O") && (Z == "O") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
        //wsx win
            else if ((W == "O") && (S == "O") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((S == "O") && (X == "O") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
        // EDC win       
            else if ((E == "O") && (D == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((E == "O") && (C == "O") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((D == "O") && (C == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
        //qsc win
        
            else if ((Q == "O") && (S == "O") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((S == "O") && (C == "O") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
        // zse win
        
            else if ((Z == "O") && (S == "O") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((S == "O") && (E == "O") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else {                
                predictPlayerWin();
            }
        }
        function predictPlayerWin() {
            if (((W == "") || (D == "") || (X == "") || (A == ""))) {
                if ((Q == "X") && (C == "X") && (step == 0)) {
                    step++;
                    fillSideSpots();
                    return;
                }
                if ((Z == "X") && (E == "X") && (step == 0)) {
                    step++;
                    fillSideSpots();
                    return;
                }                
            else {
                checkPlayerWin();
            }
         }

            function fillSideSpots() {                 
                if ((isFilled(X) == false)) {
                    $("#X").attr("class", 'botMarked');
                    $("#X").html("O");
                    return;
                }                
                else if ((isFilled(D) == false)) {
                    $("#D").attr("class", 'botMarked');
                    $("#D").html("O");
                    return;
                }        
                else if ((isFilled(W) == false)) {
                    $("#W").attr("class", 'botMarked');
                    $("#W").html("O");
                    return;
                }        
                else if ((isFilled(A) == false)) {
                    $("#A").attr("class", 'botMarked');
                    $("#A").html("O");
                    return;
                }
            }
        }
        function checkPlayerWin() {
            //qwe win 
            if ((Q == "X") && (W == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((W == "X") && (E == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "X") && (E == "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            //asd win
            else if ((A == "X") && (S == "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((S == "X") && (D == "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            //zxc win
            else if ((Z == "X") && (X == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z == "X") && (C == "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((X == "X") && (C == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
        //qaz win
            else if ((Q == "X") && (A == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((A == "X") && (Z == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((Q == "X") && (Z == "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
        //wsx win
            else if ((W == "X") && (S == "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((S == "X") && (X == "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
        // EDC win
        
            else if ((E == "X") && (D == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((E == "X") && (C == "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((D == "X") && (C == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
        //qsc win
        
            else if ((Q == "X") && (S == "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((S == "X") && (C == "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
        // zse win
        
            else if ((Z == "X") && (S == "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((S == "X") && (E == "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else { 
                casualMove();
            }
        } 
        function casualMove() {
             if ((Q != "X") && (isFilled(Q) == false)) {
                $("#Q").attr("class", 'botMarked');
                $("#Q").html("O");
                return;
            }
            else if ((E != "X") && (isFilled(E) == false)) {
                $("#E").attr("class", 'botMarked');
                $("#E").html("O");
                return;
            }
            else if ((C != "X") && (isFilled(C) == false)) {
                $("#C").attr("class", 'botMarked');
                $("#C").html("O");
                return;
            }
            else if ((Z != "X") && (isFilled(Z) == false)) {
                $("#Z").attr("class", 'botMarked');
                $("#Z").html("O");
                return;
            }
            else if ((X != "X") && (isFilled(X) == false)) {
                $("#X").attr("class", 'botMarked');
                $("#X").html("O");
                return;
            }
            else if ((D != "X") && (isFilled(D) == false)) {
                $("#D").attr("class", 'botMarked');
                $("#D").html("O");
                return;
            }
            else if ((W != "X") && (isFilled(W) == false)) {
                $("#W").attr("class", 'botMarked');
                $("#W").html("O");
                return;
            }
            else if ((A != "X") && (isFilled(A) == false)) {
                $("#A").attr("class", 'botMarked');
                $("#A").html("O");
                return;
            }
            
        }
    }
    
    //Checks if game is draw
    function isDraw() {
        var Q = $('#Q').text();
        var W = $('#W').text();
        var E = $('#E').text();
        var A = $('#A').text();
        var S = $('#S').text();
        var D = $('#D').text();
        var Z = $('#Z').text();
        var X = $('#X').text();
        var C = $('#C').text();

        if ((Q != "") && (W != "") && (E != "") &&
            (A != "") && (S != "") && (D != "") &&
            (Z != "") && (X != "") && (C != "")
            ) {
            return true;
        }
        return false;
    }

    // checks is value is filled returns bool
    function isFilled(val) {
        if ((val == "X") || (val == "O")) {
            return true;
        }
        return false;
    }

    
    //checks if someone has won
    function checkWin() {
        var Q = $('#Q').text();
        var W = $('#W').text();
        var E = $('#E').text();
        var A = $('#A').text();
        var S = $('#S').text();
        var D = $('#D').text();
        var Z = $('#Z').text();
        var X = $('#X').text();
        var C = $('#C').text();
        if (((Q == W) && (Q == E) && isFilled(Q)) ||
            ((A == S) && (S == D) && isFilled(A)) ||
            ((Z == X) && (X == C) && isFilled(Z)) ||
            ((Q == A) && (A == Z) && isFilled(Q)) ||
            ((W == S) && (S == X) && isFilled(W)) ||
            ((E == D) && (D == C) && isFilled(E)) ||
            ((Q == S) && (S == C) && isFilled(Q)) ||
            ((E == S) && (S == Z) && isFilled(E))     
            ) {
            return true;         
        }
        return false;

    }  
}

//resets the game with null values and freeSpot classes
function reset() {
    $('#Q').text("");
    $('#W').text("");
    $('#E').text("");
    $('#A').text("");
    $('#S').text("");
    $('#D').text("");
    $('#Z').text("");
    $('#X').text("");
    $('#C').text("");
    $('#Q').attr("class", "freeSpot");
    $('#W').attr("class", "freeSpot");
    $('#E').attr("class", "freeSpot");
    $('#A').attr("class", "freeSpot");
    $('#S').attr("class", "freeSpot");
    $('#D').attr("class", "freeSpot");
    $('#Z').attr("class", "freeSpot");
    $('#X').attr("class", "freeSpot");
    $('#C').attr("class", "freeSpot");

}     

    //on click toggle the determinant 2x2 app TODO- add a transparent background
    $("#det-two").click(function(){
        $(".project-app").css("display", "none");
        $("#det-two-app").toggle("slow");
    });
        
    //on click toggle the determinant 3x3 app TODO- add a transparent background    
    $("#det-three").click(function(){
        $(".project-app").css("display", "none");
        $("#project-three-app").toggle("slow");
    });
    
    //manage the scroll => fadeIn pages
    $(window).scroll(function() {
            if ($(window).scrollTop() == 0) {
                $("#side-nav").fadeOut();
            }
//            if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
//            console.log($(window).scrollTop() + $(window).height());
//            console.log("||");
//            console.log($(document).height() - 100);
//                $(".page-content").next().fadeIn("slow");
//            }
        
    });
    
    $("#about-me-tab-container").tabs();
    
    $("#tic-tac-toe-url").click(function(){
        $(".project-app").css("display", "none");
        $("#tic-tac-toe-app").toggle("slow");
        
    });
    
     $('#det-2-submit').click(function(){
       findDs2();
   });          
    $("#det-3-submit").click(function(){
        var matrix = getEmptyMatrix([], 3);
        for(var i = 0; i< matrix.length; i++){
            for(var j = 0; j < matrix.length; j++){
                matrix[i][j] = $("#project-three-app").find("#a" + i + "" + j).val();
            }
        }
        var result = get3x3DS(matrix); 
        $("#project-three-app").find("#result").text(result);
        
    });
    
    $("#det-n").click(function(){
        $(".project-app").css("display", "none");
        $("#project-n-app").toggle("slow");
        $("#project-n-app").empty();
        $("#project-n-app").append('<button id="project-detn-close" class="project-app-close">X</button><input type="text" id="size"/><button id="project-n-input-button">Enter size</button>');
    });
    
    //nxn app 
    $("#project-n-input-button").live("click", function(){
        var n = $("#project-n-app").find("#size").val();
        $("#project-n-app").empty();
                $("#project-n-app").append('<button id="project-detn-close" class="project-app-close">X</button>');

        var arr = getEmptyMatrix([], n);
        for(var i = 0; i < n; i++){
            $("#project-n-app").append("<tr>");
            for(var j = 0; j < n; j++){
$("#matrixRight").append("<input id=b" + i + "" + j + ' class="textFieldRight">');
                $("#project-n-app").append('<input id="a' + i + "" + j +'"  class="project-n-inputfield"/>');
            }
        }
        $("#project-n-app").append("<button id='project-n-result-submit'> Submit");
        $("#project-n-result-submit").live("click", function(){
          for(var i = 0; i < n; i++){
            for(var j = 0; j < n; j++){
                arr[i][j] = $("#project-n-app").find("#a" + i + "" + j).val();
            }
          }
        $("#project-n-app").empty();
        $("#project-n-app").append('<button id="project-detn-close" class="project-app-close">X</button><div class="result">'+ getDS(arr) +'</div><button id="project-n-new-matrix">Enter new Matrix</button>');

        });    
    });
    
    //reset the nxn app
    $("#project-n-new-matrix").live("click", function(){
        $("#project-n-app").empty();
        $("#project-n-app").append('<button id="project-detn-close" class="project-app-close">X</button><input type="text" id="size"/><button id="project-n-input-button">Enter size</button>');        
    });

    //generate a DS of the matrix   
    function getQuadratticDS(a11, a12, a21, a22){
        return a11 * a22 - a12 * a21;
    }
    function findDs2() {    
        var $topLeft = $("#a11").val();
        var $topRight = $("#a12").val();
        var $botLeft = $("#a21").val();
        var $botRight = $("#a22").val();
        var $result = getQuadratticDS($topLeft, $topRight, $botLeft, $botRight);    
    $("#result").text($result);
}
    
    $("#burger").click(function(){
        $("#side-nav").toggle("fast");
    });    
    $('#game-dropdown').click(function(){
        $('.projects-games-li').toggle("fast");
    });
    $('#math-dropdown').click(function(){
       $('.math-problems-li').toggle("fast"); 
    });
    $(".skills-li").click(function(i){
        switch(this.id){
                case "html-skill":
                    $("#performance").animate({width: 180}); 
                    $("#experience").animate({width: 210}); 
                    $("#preference").animate({width: 240});
                    $("#description").html("HTML is innevitable, I've been coding with HTML since 9th grade and at this point I feel pretty confident at it.");
                break;
                case "css-skill":
                    $("#performance").animate({width: 150});     
                    $("#experience").animate({width: 210});                
                    $("#preference").animate({width: 240});
                    $("#description").html("Just like HTML, CSS is an innevitable language for front- end developers. I feel confident in it but I can't compete to the pros from codepen.");
                break;
                case "js-skill":
                    $("#performance").animate({width: 120}); 
                    $("#experience").animate({width: 120});
                    $("#preference").animate({width: 270});
                    $("#description").html("JavaScript is my favourite language but without frameworks and libraries it doesn't feel so easy and practical.");
                break;
                case "jquery-skill":
                    $("#performance").animate({width: 150});
                    $("#experience").animate({width: 60});
                    $("#preference").animate({width: 300});
                    $("#description").html("jQuery is an amazing library which easyfied my work and even now as I am writing this line I am saving so much time in debugging. The only problem is that I've been using it since recently and there are a lot of things which I don't know about it.");
                break;
                case "ajax-skill":
                    $("#performance").animate({width: 30});
                    $("#experience").animate({width: 30});
                    $("#preference").animate({width: 300});
                    $("#description").html("I am an absolute beginner here but I found AJAX extremely valuable. Right now I am trying to make simple programs with XML and jQuery.");
                break;
                case "node-skill":
                    $("#performance").animate({width: 60});
                    $("#experience").animate({width: 30});
                    $("#preference").animate({width: 150});
                    $("#description").html("I study Node.js at the university. It's weird that a language like JavaScript became a back- end object- oriented technology. I am focusing on front- end right now and I can't quite value it at the moment.");
                break;
                case "php-skill":
                    $("#performance").animate({width: 60});
                    $("#experience").animate({width: 90});
                    $("#preference").animate({width: 120});
                    $("#description").html("PHP is a viable language for back- end programming but I am not keen on it. Although PHP is been around for a while I would prefer node.js. I know PHP on a basic level I can make some simple requests I can work with a small database, once I did a team project with Laravel but it's not my language.");
                break;
                case "java-skill":
                    $("#performance").animate({width: 90});
                    $("#experience").animate({width: 180});
                    $("#preference").animate({width: 0});
                    $("#description").html("I hate this language and I want to abolish it from the world. It was my first language. I understand that it is still a very powerful language which runs pretty much everywhere but it's just not my language.");
                break;
                case "csharp-skill":
                    $("#performance").animate({width: 90});
                    $("#experience").animate({width: 120});
                    $("#preference").animate({width: 60});
                    $("#description").html("I often use C# when I am solving algorithms. It has an easy syntax but I don't see myself using it proffecionally.");
                break;
                case "cplusplus-skill":
                    $("#performance").animate({width: 60});
                    $("#experience").animate({width: 30});
                    $("#preference").animate({width: 90});
                    $("#description").html("I started studying C++ a couple of months ago at the university. It has a tough syntax but atleast it's rewardable. I would love to become a game developer but I feel like C++ is big challenge for a junior programer like myself.");
                break;
                case "mysql-skill":
                    $("#performance").animate({width: 150});
                    $("#experience").animate({width: 30});
                    $("#preference").animate({width: 210});
                    $("#description").html("I was on an intership for PHP/MySQL. There I have learned everything I know about MySQL. I am not so confident about it but I think I can do most of the practical requests.");
                break;
        }
    });
    
function get3x3DS(inputMatrix) {
    return (inputMatrix[0][0] * inputMatrix[1][1] * inputMatrix[2][2]) + (inputMatrix[0][1] * inputMatrix[1][2] * inputMatrix[2][0]) + (inputMatrix[0][2] * inputMatrix[1][0] * inputMatrix[2][1]) - (inputMatrix[0][2] * inputMatrix[1][1] * inputMatrix[2][0]) - (inputMatrix[0][0] * inputMatrix[1][2] * inputMatrix[2][1]) - (inputMatrix[0][1] * inputMatrix[1][0] * inputMatrix[2][2]);
}

function get2x2DS(inputMatrix) {
    return (inputMatrix[0][0] * inputMatrix[1][1]) - (inputMatrix[0][1] * inputMatrix[1][0]);
}

function is3x3(inputMatrix) {
    if (inputMatrix.length == 3) {
        return true;
    }
    return false;
}
function isMatrixSquare(inputMatrix) {
    for (var i = 0; i < inputMatrix.length; i++) {
        if (inputMatrix.length != inputMatrix[i].length) {
            return false;
        }
    }
    return true;
}
function getDS(inputMatrix) {
    if (isMatrixSquare(inputMatrix) == false) {
        return NaN;
    }
    if (is3x3(inputMatrix) == true) {
        return get3x3DS(inputMatrix);
    }
    var outputMatrix = getEmptyMatrix([], inputMatrix.length - 1);
    var index = -1;
    var jIndex = 0;
    var kIndex = 0;
    var temp = 0;
    for (var i = 0; i < inputMatrix.length; i++) {
        index *= -1;
        for (var j = 1; j < inputMatrix.length; j++) {
            for (var k = 0; k < inputMatrix.length; k++) {
                if (i != k) {
                    outputMatrix[jIndex][kIndex] = inputMatrix[j][k];
                    kIndex++;
                }
            }
            kIndex = 0;
            jIndex++;
        }
        jIndex = 0;
        console.log(outputMatrix); // TEMP!!!
        console.log("Getting deeper");//TEMP!!
        temp += inputMatrix[0][i] * index * getDS(outputMatrix);
    }
    return temp;

}

//Returns an empty Matrix nxn
function getEmptyMatrix(inputMatrix, n) {
    for (var i = 0; i < n; i++) {
        inputMatrix[i] = new Array(n);
    }
    return inputMatrix;
}

});