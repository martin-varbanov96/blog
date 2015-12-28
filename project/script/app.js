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
    
    
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $projects = $("#projects-content");
        var $skills = $("#skills-content");
        var $contacts = $("#contacts-content");        
        
        if (scrollTop == 0) {
            $("#side-nav").fadeOut();
        }
        if (scrollTop >= ($projects.offset().top)/2) {
            $projects.fadeIn("slow");
        }
        if (scrollTop >= $skills.offset().top) {
            
            $skills.fadeIn("slow");
        }
        if (scrollTop >= $contacts.offset().top) {
            $contacts.fadeIn("slow");
        }
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
    
    //TODO- finish the nxn app 
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
                    $("#performance").attr("value", "0.6");
                    $("#experience").attr("value", "0.7");
                    $("#preference").attr("value", "0.8");
                    $("#description").html("HTML is innevitable, I've been coding with HTML since 9th grade at this point I don't feel pretty confident at it");
                break;
                case "css-skill":
                    $("#performance").attr("value", "0.5");
                    $("#experience").attr("value", "0.7");
                    $("#preference").attr("value", "0.8");
                    $("#description").html("Just like HTML, CSS is an innevitable language for front- end developers. I feel confident in it but I can't compete to the pros from codepen");
                break;
                case "js-skill":
                    $("#performance").attr("value", "0.4");
                    $("#experience").attr("value", "0.4");
                    $("#preference").attr("value", "0.9");
                    $("#description").html("JavaScript is my favourite language but without frameworks and libraries it doesn't feel so easy and practical.");
                break;
                case "jquery-skill":
                    $("#performance").attr("value", "0.5");
                    $("#experience").attr("value", "0.2");
                    $("#preference").attr("value", "1");
                    $("#description").html("jQuery is an amazing library which easyfied my work and even now as I am writing this line I am saving so much time and debugging. THe only problem is that I've been using it since recently and there are a lot of things which I don't know about it.");
                break;
                case "ajax-skill":
                    $("#performance").attr("value", "0.1");
                    $("#experience").attr("value", "0.1");
                    $("#preference").attr("value", "1");
                    $("#description").html("I am an absolute beginner here but I found AJAX extremely valuable. Right now I am trying to make simple programs with XML and jQuery.");
                break;
                case "node-skill":
                    $("#performance").attr("value", "0.2");
                    $("#experience").attr("value", "0.1");
                    $("#preference").attr("value", "0.5");
                    $("#description").html("I study Node.js at the university. It's weird that a language like JavaScript became a back- end object- oriented technology. I am focusing on front- end right now and I can't quite value it at the moment.");
                break;
                case "php-skill":
                    $("#performance").attr("value", "0.2");
                    $("#experience").attr("value", "0.3");
                    $("#preference").attr("value", "0.4");
                    $("#description").html("PHP is a viable language for back- end programming but I am not keen on it. Although PHP is been around for a while I would prefer node.js. I know PHP on a basic level I can make some simple request I can work with a small database, once I did a team project with Laravel but it's not my language.");
                break;
                case "java-skill":
                    $("#performance").attr("value", "0.3");
                    $("#experience").attr("value", "0.6");
                    $("#preference").attr("value", "0.0");
                    $("#description").html("I hate this language and I want to abolish it from the world. It was my first language. I understand that it is still a very powerful language which runs pretty much everywhere but it's just not my language.");
                break;
                case "csharp-skill":
                    $("#performance").attr("value", "0.3");
                    $("#experience").attr("value", "0.4");
                    $("#preference").attr("value", "0.2");
                    $("#description").html("I often use C# when I am solving algorithms. It has an easy syntax but I don't see myself using it proffecionally.");
                break;
                case "cplusplus-skill":
                    $("#performance").attr("value", "0.2");
                    $("#experience").attr("value", "0.1");
                    $("#preference").attr("value", "0.3");
                    $("#description").html("I started studying C++ a couple of months ago at the university. It has a tough syntax but atleast it's rewardable. I would love to become a game developer but I feel like C++ is big chalange for a junior programer like myself.");
                break;
                case "mysql-skill":
                    $("#performance").attr("value", "0.5");
                    $("#experience").attr("value", "0.1");
                    $("#preference").attr("value", "0.7");
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