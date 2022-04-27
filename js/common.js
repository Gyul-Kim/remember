"use strict";

$(function() {
    let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path

    const Swipers = function(value, spaceBetween, loop){
        const swiper = new Swiper(value + '.Swipers', {
          direction: 'horizontal',
          loop: loop,
          pagination: {
            clickable: true,
            el: value + ' .swiper-button-pagination',
          },
        //   navigation: {
        //     nextEl: value + ' .swiper-button-next',
        //     prevEl: value + ' .swiper-button-prev',
        //   },
          on: {
            slideChange: function() {
            }
          }
        });
      }

    switch(path){
        //index Page
        case '' :
        case 'index' :
            $('.btn1').on('click', function () {
                    $('.Starts').hide(); 
                    $('.Intro').show(); 
            });

            $('.btn2').on('click', function () {
                $('.Starts').hide(); 
                $('.Intro').hide(); 
                $('.Swipers').show(); 
            });

            for(let i = 0; i < 4; i++ ) {
                $("#index .contents .Swipers .swiper-wrapper").append(
                    '<div class="swiper-slide">' +
                        '<div>' + st_txt[i][0] + '</div>' +
                    '</div>'
                );
            } Swipers("#index .Swipers","auto", 0, false);

            
    
            break;
        
            default : location.href = "index.html";
    }

    
});