/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $(".haha").css("background-color", "yellow");
    $("p:last").css("background-color", "gray");

    $('#oneButton').bind('click', alertButtonClick);
    $('#logo').bind('mouseover', mouseOverme).bind('mouseout', mouseOutme);

    $('#add').bind('click', addText);
    $('#remove').bind('click', removeText);
    $('#replace').bind('click', replaceText);

    $('#customAnimate').bind('click', customAnimate);
    $('#removeAnimation').bind('click', removeAnimation);

    $('#superHumans > p').hide();
    $('#superHumans h4').click(function() {
        $(this).siblings('p:visible').slideUp('2000');
        $(this).next().animate({'height': 'toggle'}, '2000', 'easeInOutExpo');
    });

    $("#tabs").tabs();
    $("#tabs").css({'width': '1000'});
    $("#tabs").draggable();
    $("#tabs").resizable();
    $("#sortMe").sortable();

    $('#animateList').hover(function() { //mouse in
        $(this).animate({paddingLeft: '550px'}, 400);
    }, function() { //mouse out
        $(this).animate({paddingLeft: 0}, 400);
    });
    
    $('a[rel=example_group]').fancybox({

'transitionIn'	: 'elastic', 

'transitionOut'	: 'elastic',

'titlePosition' : 'over',

'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {

return '<span id=”"fancybox-title-over">Image' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';

}

});
    

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
