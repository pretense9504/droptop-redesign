$(window).scroll(function(){
        
    var y = $(this).scrollTop();
    
    if(y>0)
        $('#top').stop().animate({'bottom':'10px'},300);
    else
        $('#top').stop().animate({'bottom':'-80px'},300);
    
});

$(function(){

    $('#top').click(function(){
        $('body,html').stop().animate({'scrollTop':0},500);
    });
    
    $('.coffeeList').click(function(){
        $(this).children('.coffeeCaption').toggle();
    });
    


    $('.menu').click(function(){
        $('.menu').removeClass('titleActive')
        $('this').addClass('titleActive')
    });
});