"use strict";

$(function() {
    // 해당 페이지로 이동하도록 해주는 함수
    let path = (location.href.substr(location.href.lastIndexOf("/") + 1)).split(".")[0]; 	//path

    // 메인 페이지에서 tutorial를 넘기도록 해줌
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
        case '' :

        // 메인 페이지
        case 'index' :

        // 메인페이지 내 해당 버튼을 클릭하면, 페이지 내 다른 div가 보인다.
            $('.btn1').on('click', function () {
                    $('.Starts').hide(); 
                    $('.Intro').show(); 
            });

            $('.btn2').on('click', function () {
                $('.Starts').hide(); 
                $('.Intro').hide(); 
                $('.Swipers').show(); 
            });

            // 메인 3번째 div를 구성하는 함수
            for(let i = 0; i < 4; i++ ) {
                $("#index .contents .Swipers .swiper-wrapper").append(
                    '<div class="swiper-slide">' +
                        '<div>' + st_txt[i][0] + '</div>' +
                    '</div>'
                );
            } Swipers("#index .Swipers","auto", 0, false);
            break;

            // 달력 페이지
            case 'calendar' :
            // 현재 해당 '달'에 대한 타이틀 => 아직 반영 X
              var currentTitle = document.getElementById('current-year-month');
              var calendarBody = document.getElementById('calendar-body');
              // 현재날짜
              var today = new Date();

              // 해당 월의 첫번째 날에 대한 정보
              var first = new Date(today.getFullYear(), today.getMonth(),1);

              // 해달 달에 대한 요일 및 그 해의 달에 대한 함수. 현재 반영 X
              var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
              var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];

             // 윤달 아닌 평상시
              var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
              // 윤달
              var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
              var pageFirst = first;
              var pageYear;
              if(first.getFullYear() % 4 === 0){
                  pageYear = leapYear;
              }else{
                  pageYear = notLeapYear;
              }

              // 현재 해당 달력에 뿌려짐
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

                // 다음달로 넘어갈 때. 현재 달 삭제됨.
                function removeCalendar(){
                    let catchTr = 100;
                    for(var i = 100; i< 106; i++){
                        var $tr = document.getElementById(catchTr);
                        $tr.remove();
                        catchTr++;
                    }
                }


            // 달력 내 각각의 날짜를 클릭했을시, 날짜 표시와 일정 등록표 등장     
            $("#cal .contents_wrap table tbody tr td").append('<span></span>');

            $("#cal .contents_wrap table tbody tr td").on("click", function(){
                $("#cal .contents_wrap table tbody tr td").not($(this)).removeClass('active');
                $(this).toggleClass('active');
                $(".todo_list").css({"display":"block","opacity":"1","z-index":"1","transition":" 0.25s ease-in-out"});
                $(".todo_list .list").css({"bottom":"0","display":"block","transition":" 0.25s ease-in-out"});
                $(".todo_list .bg").fadeIn(250);

                
            });

            // todo_list 검은 화면 누르면 내려가기
            $(".todo_list .bg").on("click",function(){
                $(".todo_list").css({"display":"none","opacity":"0","z-index":"-1","transition":" 0.25s ease-in-out"});
                $(".todo_list .list").css({"bottom":"0","display":"none","transition":" 0.25s ease-in-out"});
                $(".todo_list .bg").fadeOut(250);
                return false;
            });



            break;
        
            default : location.href = "index.html";
    }

    
});