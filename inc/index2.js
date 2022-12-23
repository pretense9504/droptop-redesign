    $(function(){
                //섹션1 메뉴 전체 버튼 
    $('.menuTitle1').click(function(){
        $('.menuTitle1').removeClass('menuActive');   
        $(this).addClass('menuActive'); 
    });
        
        
        $('.menuText1').click(function(){
            $('.slideBox1').show();
            $('.slideBox2, .slideBox3').hide();
        });
        
        $('.menuText2).click(function(){
            $('.slideBox1, .slideBox3').hide();
            $('.slideBox2').css('display','flex');
        });
        
        $('.menuText3').click(function(){
            $('.slideBox1, .sldieBox2').hide();
            $('.slideBox3').css('display','flex');
        });
        

    });