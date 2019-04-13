(function($){

    /**
     * Função para fazer um objeto DOM ter o mesmo tamanho da janela
     * menos o tamanho passado como segundo argumento
     * @param {object} el - elemento que recebera o tamanho
     * @param {number} num - numero que irá subtrair o o tamanho total da tela
     */
    function maxHeightScreenMinus(el, num){
        if(typeof el != 'object'){
            throw "Essa função precisa de um objeto"
        }

        var screenHeight = window.innerHeight;
        var minus = num || 0;

        $(el).height(screenHeight - minus);

    }

    function mostrarIrTopo(e){

        let btn = $('#ir-topo');
        let posY = e.currentTarget.scrollY
        if(posY > 800){
            $(btn).fadeIn(200);
        }
        else{
            $(btn).fadeOut(200);
        }
    }

    //slick
    $('#bannerDep').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#navdep'
      });
    
    $('#navdep').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#bannerDep',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: '<img src="/img/arrow.png" class="arrow" alt="Esquerda"/>',
        nextArrow: '<img src="/img/arrow.png" class="arrow arrow-right" alt="Esquerda"/>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]       
    });

   
    $('#banner').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        arrows: false,
        cssEase: 'linear',
        focusOnSelect: false,
        pauseOnFocus: false,
        autoplay: true,
        autoplaySpeed: 1500,
      });

      $('#galeriaEst').slick({
        dots: true,
        dotsClass: "estec-docs",
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        prevArrow: '<img src="./img/arrow.png" class="arrow" alt="Esquerda"/>',
        nextArrow: '<img src="./img/arrow.png" class="arrow arrow-right" alt="Esquerda"/>'
      });
    
      $('#cuidadoras').slick({
        dots: true,
        dotsClass: "estec-docs",
        infinite: true,
        speed: 500,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        prevArrow: '<img src="./img/arrow.png" class="arrow" alt="Esquerda"/>',
        nextArrow: '<img src="./img/arrow.png" class="arrow arrow-right" alt="Esquerda"/>'
      });


      $('#midia').slick({
        dots: true,
        infinite: false,
        speed: 300,
        dotsClass: "estec-docs",
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<img src="./img/arrow.png" class="arrow" alt="Esquerda"/>',
        nextArrow: '<img src="./img/arrow.png" class="arrow arrow-right" alt="Esquerda"/>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



    $('#agenda-c').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<img src="img/arrow-br.png" class="arrow" alt="Esquerda"/>',
    nextArrow: '<img src="img/arrow-br.png" class="arrow arrow-right" alt="Esquerda"/>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]       
});
    


    $('.goesTo, .link-footer').on('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

        // Outras AnimaÃ§Ãµes
        // linear, swing, jswing, easeInQuad, easeInCubic, easeInQuart, easeInQuint, easeInSine, easeInExpo, easeInCirc, easeInElastic, easeInBack, easeInBounce, easeOutQuad, easeOutCubic, easeOutQuart, easeOutQuint, easeOutSine, easeOutExpo, easeOutCirc, easeOutElastic, easeOutBack, easeOutBounce, easeInOutQuad, easeInOutCubic, easeInOutQuart, easeInOutQuint, easeInOutSine, easeInOutExpo, easeInOutCirc, easeInOutElastic, easeInOutBack, easeInOutBounce

    });

    function mostrarIrTopo(e){

        let btn = $('#ir-topo');
        let posY = e.currentTarget.scrollY
        if(posY > 800){
            $(btn).fadeIn(200);
        }
        else{
            $(btn).fadeOut(200);
        }
    }

    $('.fechar-menu').on('click', function(){
        $('#menu-mob-flutuante').fadeOut(200);
    });

    $('.menu-mob').on('click', function(){
        $('#menu-mob-flutuante').fadeIn(200);
    })

    $('.link-topo').on('click', function(){
        $('.link-topo').removeClass('ativo');
        $(this).addClass('ativo');
        $('#menu-mob-flutuante').fadeOut(200);
    })

    $('.fechar-agenda').on('click', function(){
        console.log( $('#agemdaPop'));
        $('#agemdaPop').fadeOut(200);
    });

    $('#agenda-c, #abrirAgenda').on('click', '.abrirAgenda', function(){
        $('#agemdaPop').fadeIn(200);
    });

    $('.striort-conheca').on('click', '.abrirAgenda', function(){
        $('#agemdaPop').fadeIn(200);
    });

    
    $('.abrirIncs').on('click', function(){
        var container = $(this).parents('.agenda-item');
        $(container).children('.con-inscricao').slideToggle();
    })

    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200);
        maxHeightScreenMinus($(".c-banner"));
        $('.flex-popUp').height((window.innerHeight * .4) - 30)
    });

    window.addEventListener('resize', function(){
        maxHeightScreenMinus($(".c-banner"));
        $('.flex-popUp').height((window.innerHeight * .4) - 30)
    })

    $('.container-curriculo').on('click', function(){
        $(this).children('.container-filho').slideToggle();
    });

    window.addEventListener('scroll', function(e){
        mostrarIrTopo(e);
    });
    
})($)