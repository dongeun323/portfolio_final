$(document).ready(function(){
    
    //nav on
    $('.main-navigation-toggle span').click(function(){ 
        $('.nav-main').toggleClass('on');
    });
    $('.close').click(function(){
        $('.nav-main').removeClass('on');
    });
    $('.m1').click(function(){
        $('.nav-main').removeClass('on');
    });
    $('.m2').click(function(){
        $('.nav-main').removeClass('on');
    });
    $('.m3').click(function(){
        $('.nav-main').removeClass('on');  
    });
    $('.m4').click(function(){
        $('.nav-main').removeClass('on'); 
    });

        //loading. sec3 skill counter
        $(function(){
            imagesProgress(); //loading
            counter();
        });
    
        function counter() {
            if ($('.skill_wrap .count').size()) {
                $c = $('.skill_wrap .count');

                $c.each(function () {
                    var $this = $(this);
                    $this.data('target', parseInt($this.html()));
                    $this.data('counted', false);
                    $this.html('0');
                });

                $(window).on('scroll', function () {
                    var speed = 5000;

                    $c.each(function (i) {
                        var $t = $(this);
                        if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                            $t.data('counted', true);

                            $t.animate({
                                dummy: 1
                            }, {
                                duration: speed,
                                step: function (now) {
                                    var $this = $(this);
                                    var val = Math.round($this.data('target') * now);
                                    $this.html(val);
                                },
                                easing: 'easeInOutQuart'
                            });
                        }
                    });
                }).triggerHandler('scroll');
            }
        }
    
        //imageProgress
        function imagesProgress(){
            var $container = $('#progress'),
                $progressBar = $container.find('.progress-bar'),
                $progressText = $container.find('.progress-text'),
                imgLoad = imagesLoaded('body'),	
                imgTotal = imgLoad.images.length,	
                imgLoaded = 0,										
                current = 0,							
                progressTimer = setInterval(updateProgress, 1000 / 60);

            imgLoad.on('progress', function(){
                imgLoaded++;
            });

            function updateProgress(){
                var target = ( imgLoaded / imgTotal) * 100;

                current += ( target - current) * 0.1;
                $progressBar.css({ width: current + '%' });
                $progressText.text( Math.floor(current) + '%' );

                if(current >= 100){
                    clearInterval(progressTimer);
                    $container.addClass('progress-complete');
                    $progressBar.add($progressText)
                        .delay(500)
                        .animate({opacity: 0},250,function(){
                            $container.animate({top: '-100%'},1000,'easeInOutQuint');
                        });
                        $('body').addClass('active');
                }
                if(current > 99.9){
                    current = 100;
                }
            }	
        }

        //sec4 hover img효과
        $('.sec4 > div').find('img').hide();
        
        $('.st1').hover(function(){
            $('.img1').find('img').stop().fadeIn(350);
        },function(){
            $('.img1').find('img').hide();
        });
        
        $('.st1').mousemove(function(e){
            $('.img1').css('left',e.pageX+20).css('bottom',e.pageY+40);
        });
        
        $('.st2').hover(function(){
            $('.img2').find('img').stop().fadeIn(350);
        },function(){
            $('.img2').find('img').hide();
        });
        
        $('.st2').mousemove(function(e){
            $('.img2').css('left',e.pageX+20).css('bottom',e.pageY+40);
        });
        
        $('.st3').hover(function(){
            $('.img3').find('img').stop().fadeIn(350);
        },function(){
            $('.img3').find('img').hide();
        });
        
        $('.st3').mousemove(function(e){
            $('.img3').css('left',e.pageX+20).css('bottom',e.pageY+40);
        });
        
        $('.st4').hover(function(){
            $('.img4').find('img').stop().fadeIn(350);
        },function(){
            $('.img4').find('img').hide();
        });
        
        $('.st4').mousemove(function(e){
            $('.img4').css('left',e.pageX+20).css('bottom',e.pageY+40);
        });
    

        //sec1 main_text
        var rellax = new Rellax('.rellax');

    
        //show Animation
        $(window).scroll(function(){
            var wScroll = $(this).scrollTop();
            
            //sec2 내용 나타나게
            if(wScroll >= $('.sec2').offset().top - $(window).height()/2){
                $('.sec2').addClass('show');
            }
            
            //sec3 skill 나타나게
            var sec3 = $('.sec3 .skill');
            var sec3S = sec3.find('ul li > span');
            
            if(wScroll >= sec3.offset().top - $(window).height()/2){
                sec3S.eq(0).addClass('show');
                sec3S.eq(1).addClass('show');
                sec3S.eq(2).addClass('show');
                sec3S.eq(3).addClass('show');
                sec3S.eq(4).addClass('show');
            }
            
            //sec4 스크롤시 텍스트 좌우이동
            var text = (wScroll - $('.sec4_text').offset().top) / 30;
            
            $('.sec4_text').css({'transform':'translateX('+ text +'%)'});
            
            var offset01 = (wScroll - $('.sec4_text li').eq(0).offset().top);
            var offset02 = (wScroll - $('.sec4_text li').eq(1).offset().top);
            var offset03 = (wScroll - $('.sec4_text li').eq(2).offset().top);
            var offset04 = (wScroll - $('.sec4_text li').eq(3).offset().top);
            var offset05 = (wScroll - $('.sec4_text li').eq(4).offset().top);

            
            $('.sec4_text li').eq(0).css({'transform':'translateX('+ offset01 +'px)'});
            $('.sec4_text li').eq(1).css({'transform':'translateX('+ offset02 +'px)'});
            $('.sec4_text li').eq(2).css({'transform':'translateX('+ offset03 +'px)'});
            $('.sec4_text li').eq(3).css({'transform':'translateX('+ offset04 +'px)'});
            $('.sec4_text li').eq(4).css({'transform':'translateX('+ offset05 +'px)'});
            
            //sec5 제목, 내용 나타나게
            if(wScroll >= $('.sec5 .act1').offset().top - $(window).height()/3){
                $('.act1').addClass('show');
            }
            if(wScroll >= $('.sec5 .act2').offset().top - $(window).height()/3){
                $('.act2').addClass('show');
            }
            if(wScroll >= $('.sec5 .act3').offset().top - $(window).height()/3){
                $('.act3').addClass('show');
            }
            if(wScroll >= $('.sec5 .act4').offset().top - $(window).height()/3){
                $('.act4').addClass('show');
            }
            
            //sec5 img Animation
            var sec5 = $('.sec5');
            
            sec5.find('img').css('opacity','0');
            
            if(wScroll >= $('.sec5 .act1').offset().top - $(window).height()/3){
                $('.img_container1').addClass('show');
                $('.img_container1 img').css('opacity','1');
            }
            if(wScroll >= $('.sec5 .act2').offset().top - $(window).height()/3){
                $('.img_container2').addClass('show');
                $('.img_container2 img').css('opacity','1');
            }
            if(wScroll >= $('.sec5 .act3').offset().top - $(window).height()/3){
                $('.img_container3').addClass('show');
                $('.img_container3 img').css('opacity','1');
            }
            if(wScroll >= $('.sec5 .act4').offset().top - $(window).height()/3){
                $('.img_container4').addClass('show');
                $('.img_container4 img').css('opacity','1');
            }
            
            
            //sec6 스크롤시 텍스트 좌우이동
            var text = (wScroll - $('.sec6_text').offset().top) / 30;
            
            $('.sec6_text').css({'transform':'translateX('+ text +'%)'});
            
            var offset01 = (wScroll - $('.sec6_text li').eq(0).offset().top);
            var offset02 = (wScroll - $('.sec6_text li').eq(1).offset().top);
            var offset03 = (wScroll - $('.sec6_text li').eq(2).offset().top);
            var offset04 = (wScroll - $('.sec6_text li').eq(3).offset().top);
            var offset05 = (wScroll - $('.sec6_text li').eq(4).offset().top);

            
            $('.sec6_text li').eq(0).css({'transform':'translateX('+ offset01 +'px)'});
            $('.sec6_text li').eq(1).css({'transform':'translateX('+ offset02 +'px)'});
            $('.sec6_text li').eq(2).css({'transform':'translateX('+ offset03 +'px)'});
            $('.sec6_text li').eq(3).css({'transform':'translateX('+ offset04 +'px)'});
            $('.sec6_text li').eq(4).css({'transform':'translateX('+ offset05 +'px)'});
            
            
            //sec7 제목, 내용 나타나게
            if(wScroll >= $('.sec7 .ani1').offset().top - $(window).height()/4){
                $('.ani1').addClass('show');
            }
            if(wScroll >= $('.sec7 .ani2').offset().top - $(window).height()/4){
                $('.ani2').addClass('show');
            }
            if(wScroll >= $('.sec7 .ani3').offset().top - $(window).height()/4){
                $('.ani3').addClass('show');
            }
            if(wScroll >= $('.sec7 .ani4').offset().top - $(window).height()/4){
                $('.ani4').addClass('show');
            }
            
            
            //sec8 스크롤시 텍스트 좌우이동
            var text = (wScroll - $('.sec8_text').offset().top) / 30;
            
            $('.sec8_text').css({'transform':'translateX('+ text +'%)'});
            
            var offset01 = (wScroll - $('.sec8_text li').eq(0).offset().top);
            var offset02 = (wScroll - $('.sec8_text li').eq(1).offset().top);
            var offset03 = (wScroll - $('.sec8_text li').eq(2).offset().top);
            var offset04 = (wScroll - $('.sec8_text li').eq(3).offset().top);
            var offset05 = (wScroll - $('.sec8_text li').eq(4).offset().top);

            
            $('.sec8_text li').eq(0).css({'transform':'translateX('+ offset01 +'px)'});
            $('.sec8_text li').eq(1).css({'transform':'translateX('+ offset02 +'px)'});
            $('.sec8_text li').eq(2).css({'transform':'translateX('+ offset03 +'px)'});
            $('.sec8_text li').eq(3).css({'transform':'translateX('+ offset04 +'px)'});
            $('.sec8_text li').eq(4).css({'transform':'translateX('+ offset05 +'px)'});
            
            //footer 제목 나타나게
            if(wScroll >= $('.footer').offset().top - $(window).height()/3){
                $('.footer').addClass('show');
            }
        });
        
        //footer contact 이동
        var contact = $('.contact > a');

        contact.click(function(e){
            e.preventDefault();
        
            var target = $(this);
            var index = target.index();
            var footer = $('#footer');
            var offset = footer.offset().top;
            
            $('html, body').animate({scrollTop : offset}, 450);
        });
    
});