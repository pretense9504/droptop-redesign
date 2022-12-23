$(function(){
    
    $('.coffeeList').click(function(){
        $(this).children('.coffeeCaption').css('display','block')
    });
    

    $('.captionClose').click(function(){
       $(this).children('.coffeeCaption').hide();
    });
});




