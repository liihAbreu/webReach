(function($){

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
    


    $('.goesTo, .link-footer').on('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({ scrollTop: $($anchor.attr('href')).offset().top }, 1000, 'swing');

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

    //esse evento acontece quando toda a página é carregada
    window.addEventListener('load', function(){
        $('#loader').fadeOut(200).setTimeout(function(){
            $('#loader img').attr('alt','Pagina carregada');
        },200);      
    });

    window.addEventListener('scroll', function(e){
        mostrarIrTopo(e);
    });

    $('.bnt-acessibilidade').click(function(){
        $('.btn-acessiveis').fadeToggle();
    });
    $('#fechar-acessivel').click(function(){
        $('.btn-acessiveis').fadeToggle();
        $('.bnt-acessibilidade').focus();
    });
    
    window.addEventListener('scroll', function(){      
        if($(this).scrollTop() > 100){
            $('header').addClass('colorheader');
        }else{
            $('header').removeClass('colorheader');
        }
    });
})($)