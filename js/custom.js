jQuery(document).ready(function($) { 

  $('.slider').slick({
    dots: true,
    dotsClass: "slider-dots",
    autoplay: false,
    arrows: true,
    nextArrow: '<div class="slick-arrow next-arrows"></div>',
    prevArrow: '<div class="slick-arrow prev-arrows"></div>',
    responsive: [{
      breakpoint: 540,
      settings: {
        adaptiveHeight: true, 
      } 
    }]
  });


  $('.history-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.history-slider-nav'
  });
  $('.history-slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.history-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });
});

//Перехід по якорям менюшки
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



 //POP-UP

$('a#modal-one').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_one') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_one')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });

  $('a#modal-two').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_two') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_two')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });

  $('a#modal-three').click( function(event){ // лoвим клик пo ссылки с id="go"
    event.preventDefault(); // выключaем стaндaртную рoль элементa
    $('.overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
      function(){ // пoсле выпoлнения предъидущей aнимaции
        $('.overlay').addClass('active');
        $('body').addClass('menu-opened');
        $('#modal_form_three') 
          .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
          .animate({opacity: 1, top: '30%'}, 400); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
    });
  });
  /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
  $('.overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
    $('#modal_form_three')
      .animate({opacity: 0, top: '5%'}, 400,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
        function(){ // пoсле aнимaции
          $(this).css('display', 'none'); // делaем ему display: none;
          $('.overlay').removeClass('active'); // скрывaем пoдлoжку
          $('body').removeClass('menu-opened');
        }
      );
  });



//Меню, яка зникає при скроллі вниз і з*являється при скроллі вверх
  $(document).ready(function() {
  
  var header = $(".header"); // Меню
  var scrollPrev = 0 // Предыдущее значение скролла
  
  $(window).scroll(function() {
    var scrolled = $(window).scrollTop(); // Высота скролла в px
    var firstScrollUp = false; // Параметр начала сколла вверх
    var firstScrollDown = false; // Параметр начала сколла вниз
    
    // Если скроллим
    if ( scrolled > 0 ) {
      // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
      if ( scrolled > scrollPrev ) {
        firstScrollUp = false; // Обнуляем параметр начала скролла вверх
        // Если меню видно
        if ( scrolled < header.height() + header.offset().top ) {
          // Если только начали скроллить вниз
          if ( firstScrollDown === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollDown = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        // Если меню НЕ видно
        } else {
          // Позиционируем меню фиксированно вне экрана
          header.css({
            "position": "fixed",
            "top": "-" + header.height() + "px"
          });
        }
        
      // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
      } else {
        firstScrollDown = false; // Обнуляем параметр начала скролла вниз
        // Если меню не видно
        if ( scrolled > header.offset().top ) {
          // Если только начали скроллить вверх
          if ( firstScrollUp === false ) {
            var topPosition = header.offset().top; // Фиксируем текущую позицию меню
            header.css({
              "top": topPosition + "px"
            });
            firstScrollUp = true;
          }
          // Позиционируем меню абсолютно
          header.css({
            "position": "absolute"
          });
        } else {
          // Убираем все стили
          header.removeAttr("style");
        }
      }
      // Присваеваем текущее значение скролла предыдущему
      scrollPrev = scrolled;
    } 
  });     
});


  $('#menu-button').click(function() {
    $(this).toggleClass('active');
    $('#menu').slideToggle();
  });

  $('#menu a').click(function() {
    $('#menu-button').toggleClass('active');
    $('#menu').slideToggle();
  });