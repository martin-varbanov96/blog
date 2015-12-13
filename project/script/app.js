/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
$(document).ready(function(){        
    //TODO- update the scroll 
//    $(window).scroll( function(){
//        if($(window).scrollTop() != 0){
//                $("#burger-wrap").css("visibility", "visible");
//        }
//        else{
//                $("#burger-wrap").css("visibility", "hidden");
//        }
//    }); 
    $("#burger").click(function(){
        $("#side-nav").toggle("fast");
    });    
    $('#projects-game-list').click(function(){
        $('.projects-games-li').toggle("fast");
    });
    $('#math-problems-list').click(function(){
       $('.math-problems-li').toggle("fast"); 
    });
});