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
});