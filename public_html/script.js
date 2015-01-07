/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".haha").css("background-color", "yellow");
    $("p").css("background-color", "gray");
    $('#oneButton').bind('click', alertButtonClick);
    $('#textBox1').bind('blur', onBlurEvent)
            .bind('onmousedown', onMDownEvent)
            .bind('onmouseup', onMUpEvent);
});

function alertButtonClick(){
       alert("There was a button clicked");   
}

function onBlurEvent(){
    $("#second").html("You left the box");
}

function onMDownEvent(){
    $("#second").html("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
}

function onMUpEvent(){
    $("#second").html("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
}
