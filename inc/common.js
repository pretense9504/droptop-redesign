//공통스크립트

//document.write("<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>");



$(function(){
    
    var number1 = $('.sub>a').length;
    var x ;
    for (x=0; x<number1; x++){
        var link = $('.sub>a').eq(x).attr('href');
        if(link=='#')
            $('.sub>a').eq(x).addClass('inActive')
    }
    
    $('a').click(function(){
        var link = $(this).attr('href');
        if(link=='#')
            return false;    //기본 기능 무효화
    })
    
    
    $('.main, #subBack').mouseenter(function(){
        if( $(window).width() > 800)
        $('.subMenu, #subBack').stop().slideDown();
        else
            $(this).children('.subMenu').stop().slideDown();
    });
    
    $('.main, #subBack').mouseleave(function(){
        $('.subMenu, #subBack').stop().slideUp();
    });
    
    
    
    $('#view').click(function(){
        $('#navi').toggleClass('naviActive');
    });
    
  
}); //end


    $(window).resize(function(){    
        
        if( $(window).width() > 750 )   
            $('#navi').removeAttr('style'); 
    }); 