
//easing plugin 삽입

var plugin = "<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'></script>";

    // jQuery 3.x 버전 이상에서는 $(window).load 이벤트에 오류 있음
    // $(window).on('load', function()으로 바꿔야 함

    $(window).scroll(function(){
        
        var y = $(this).scrollTop();
        
        if(y>0)
            $('#top').stop().animate({'bottom':'10px'},300);
        else
            $('#top').stop().animate({'bottom':'-80px'},300);
        
    });
    
    $(window).on('load', function() {    //모든 콘텐츠가 불러지면
        $("#preloading").fadeOut("slow");  //프리로딩 화면 사라짐
        $("body").css("overflow","auto");    //화면 요소는 스크롤되게 함
    });

    

document.write(plugin);

    var slideNo=0;

    function slide(x) {
    
    slideNo +=x;
    if(slideNo>1) slideNo=0;
    if(slideNo<0) slideNo=1;

    var newX = (slideNo * -100) + '%';
    
    $('#slideBox').css('marginLeft', newX)
    
    $('.slide').eq(slideNo).fadeIn(3000);
    $('.slide').children('.slideContent').hide();
    $('.slide').eq(slideNo).children('.slideContent').show();
        
    var no = slideNo+1;    
    $('.slideNo1>h2').html('0'+no);
}



    
function phone() {
    var h = $('#phone').width() * 1.89 ;
    
    $('#membershipBox').height(h); 
}

$(document).ready(phone);
$(window).resize(phone);




//sec1 메뉴슬라이드
var slideBoxName = ['#slideBox1','#slideBox2','#slideBox3']
var slideBoxNo = 0;

    
    function right(){
        $(slideBoxName[slideBoxNo]).stop().animate({'margin-left':-slidewidth},500,function(){
            $(slideBoxName[slideBoxNo]).children('.slide1:first').appendTo(slideBoxName[slideBoxNo]);
        $(slideBoxName[slideBoxNo]).css('margin-left', 0);
            
        });
        
    }
    

    function left(){
        $(slideBoxName[slideBoxNo]).children('.slide1:last').prependTo(slideBoxName[slideBoxNo]); 
        $(slideBoxName[slideBoxNo]).css('margin-left',-slidewidth);
        $(slideBoxName[slideBoxNo]).stop().animate({'margin-left':0},500);
    }


function init() {
            
            slidewidth = $('#outBox1').width() / 3; 
            
            if( $(window).width() < 750)
                slidewidth = $('#outBox1').width() / 2;
            
            if( $(window).width() < 400)
                slidewidth = $('#outBox1').width();
            
            $('.slide1').width(slidewidth);    //width값을 slidewidth로 적용하겠다.
            $('#slideBox1, #slideBox2, #slideBox3').width(slidewidth*6);   //6개로 알아서 계산이 되도록 
            
        }   //end init()

        $(document).ready(init);
        $(window).resize(init);






    $(function(){

        $('#top').click(function(){
            $('body,html').stop().animate({'scrollTop':0},500);
        });

         //easeScroll 효과 적용
        $("html,body").easeScroll({
            frameRate: 60,
            animationTime: 2000,
            stepSize: 200
        });

        
        $('.slideRight').click(function(){
            slide(1);
        });
    
    
        $('.slideLeft').click(function(){
            slide(-1);
        });
        
        
        
        
        
        $('.menuRight').click(function(){
            
            if(!$('#slideBox1, #slideBox2, #slideBox3').is(':animated'))
                right();
        });  
        

        $('.menuLeft').click(function(){
            if(!$('#slideBox1, #slideBox2, #slideBox3').is(':animated'))
                left();
        });  
        
        
        $('.bestTitle1').click(function(){
            $('.bestTitle1').removeClass('bestActive');
            $(this).addClass('bestActive');
        });
        
        
        $('.bestText1').click(function(){
            $('#slideBox1').show();
            $('#slideBox2, #slideBox3').hide();
            slideBoxNo = 0;
        });
        
        $('.bestText2').click(function(){
            $('#slideBox2').css('display','flex')
            $('#slideBox1, #slideBox3').hide();
            slideBoxNo = 1;
        });
        
        $('.bestText3').click(function(){
            $('#slideBox3').css('display','flex')
            $('#slideBox1, #slideBox2').hide();
            slideBoxNo = 2;
        });
        

        }); 

