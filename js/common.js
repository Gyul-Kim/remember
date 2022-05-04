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

            case 'calendar' :
              var currentTitle = document.getElementById('current-year-month');
              var calendarBody = document.getElementById('calendar-body');
              var today = new Date();
              var first = new Date(today.getFullYear(), today.getMonth(),1);
              var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
              var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
              var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
              var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
              var pageFirst = first;
              var pageYear;
              if(first.getFullYear() % 4 === 0){
                  pageYear = leapYear;
              }else{
                  pageYear = notLeapYear;
              }

              function showCalendar(){
                  let monthCnt = 100;
                  let cnt = 1;
                  for(var i = 0; i < 6; i++){
                      var $tr = document.createElement('tr');
                      $tr.setAttribute('id', monthCnt);   
                      for(var j = 0; j < 7; j++){
                          if((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){
                              var $td = document.createElement('td');
                              $tr.appendChild($td);     
                          }else{
                              var $td = document.createElement('td');
                              $td.textContent = cnt;
                              $td.setAttribute('id', cnt);                
                              $tr.appendChild($td);
                              cnt++;
                          }
                      }
                      monthCnt++;
                      calendarBody.appendChild($tr);
                  }
              }
              showCalendar();

              function removeCalendar(){
                  let catchTr = 100;
                  for(var i = 100; i< 106; i++){
                      var $tr = document.getElementById(catchTr);
                      $tr.remove();
                      catchTr++;
                  }
              }

              break;
        
            default : location.href = "index.html";
    }

    
});