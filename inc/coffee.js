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
    
    
    $('.checkBox').click(function() {
        $('.checkBox').html('<i class="far fa-square checkOff"></i>');
        $(this).html('<i class="fas fa-check-square checkOn"></i>'); 
    });
    

    $('.checkBox').eq(0).click(function() {
        $('.espresso, .latte, .cold, .decaffein').show();
    });
    

    $('.checkBox').eq(1).click(function() {
        $('.latte, .cold, .decaffein').hide();
        $('.espresso').show();
    });

    $('.checkBox').eq(2).click(function() {
        $('.espresso, .cold, .decaffein').hide();
        $('.latte').show();
    });

    $('.checkBox').eq(3).click(function() {
        $('.espresso, .latte, .decaffein').hide();
        $('.cold').show();
    });




});