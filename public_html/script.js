/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    
    //using jquery to change background color of sister paragragh
    $(".haha").css("background-color", "yellow");
    $(".haha p:last").css("background-color", "gray");

    //mouse over and mouse click effect
    $('#oneButton').bind('click', alertButtonClick);
    $('#logo').bind('mouseover', mouseOverme).bind('mouseout', mouseOutme);

    //you can add, remove, and replace text
    $('#add').bind('click', addText);
    $('#remove').bind('click', removeText);
    $('#replace').bind('click', replaceText);

    //change animation and remove it
    $('#customAnimate').bind('click', customAnimate);
    $('#removeAnimation').bind('click', removeAnimation);

    //accordion
    $('#superHumans > p').hide();
    $('#superHumans h4').click(function() {
        $(this).siblings('p:visible').slideUp('2000');
        $(this).next().animate({'height': 'toggle'}, '2000', 'easeInOutExpo');
    });
    //resizable, draggable, sortable tabs
    $("#tabs").tabs();
    $("#tabs").css({'width': '1000'});
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();

    //nudging out animation
    $('#animateList').hover(function() { //mouse in
        $(this).animate({paddingLeft: '550px'}, 400);
    }, function() { //mouse out
        $(this).animate({paddingLeft: 0}, 400);
    });
    
    //fade in and out effect on button
    $('#navBar').bind('mouseover', fadeIn).bind('mouseout', fadeOut);

//    $("a[rel=example_group]").fancybox({
//        'transitionIn': 'elastic',
//        'transitionOut': 'elastic',
//        'titlePosition': 'over',
//        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
//            return '<span id="fancybox-title-over">Image' + (currentIndex + 1) + 
//            ' / ' + currentArray.length + (title.length ?  '&nbsp;' + title : '') + '</span>';
//        }
//});


});

function alertButtonClick() {
    alert("There was a button clicked");
}

function mouseOverme() {
    $("#second").html("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    $("#second").css("font-size", "27px");
    $("#second").css("background-color", "red");
}

function mouseOutme() {
    $("#second").html("zzzzzzzzzzzzzzzzz");
    $("#second").css("font-size", "13px");
}

function addText() {
    $("#randPara").append('<p>hahahahahahahahahahahahhahaha</p>')
}
function removeText() {
    $("#randPara p:last").remove();
}
function replaceText() {
    $("#useless").html('<h6> I am Replaced...................</h6>');
}

function customAnimate() {
    $("#logo").animate({opacity: 0.25, height: '150px'}, 2000, 'swing');
}

function removeAnimation() {
    $("#logo").hide('slide', {}, 2500);
}

//fade in and out by using opacity
function fadeIn() {
    $("#navBar").css("opacity", 0.4);
    $("#navBar").css("background-color", "green");
}

function fadeOut() {
    $("#navBar").css("opacity", 1);   
    $("#navBar").css("background-color", "white");
}