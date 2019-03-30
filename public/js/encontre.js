(function($){
    // globais
    var telas = $('#encontre .tela');
    $(telas).hide();
    var telasEnum = {
        regiao:     0,
        estado:     1,
        cidades:    2
    }
    var regSelecionada = '';
    var estadoSelecionado = '';
    var cidadeSelecioanda = '';
    var esteticistas = '';

    var currentTela = telasEnum.regiao;    
    fn_iniciarTelas();

    function fn_iniciarTelas(){
        $(telas[currentTela]).fadeIn(200);
    }

    function fn_voltar(){
        var nextTela = currentTela - 1;
        fn_trocarTela(nextTela);
    }

    function fn_trocarTela(tela){
        $(telas[currentTela]).fadeOut(400, function(){
            $(telas[tela]).fadeIn(400);
        });
        currentTela = tela;
    }

    function fn_carregar_estados(reg){
        if(!reg)
            throw ("Região necessaria")

        regSelecionada = profissionais[reg];
        console.log(regSelecionada);
        var html = '';
        regSelecionada.forEach(function(item, i){
            html += '<li class="estado" data-index="' + i + '">' + item.nome + '</li>'
        })
        $('#estados').html(
            html
        )
    }

    function fn_carregar_cidades(cidade){
        var index = parseInt( $(this).data('index') );

        estadoSelecionado = regSelecionada[index];
        cidadeSelecioanda = estadoSelecionado.cidades;
        var html = '';
        cidadeSelecioanda.forEach(function(item, i){
            html += '<li class="cidade" data-index="' + i + '">' + item.cidade + '</li>'
        })

        $('#cidades').html(
            html
        )
        fn_trocarTela(2);
    }

    function fn_carregar_revendedores(){
        var index = parseInt( $(this).data('index') );
        var conteudoLi = '';
        var conteudoLi2 = "";

        let esteticistas = estadoSelecionado.cidades[index];

        $.each(esteticistas.esteticista, function(v_Index,v_Object){
            conteudoLi += '<li><h4 class="text-verde-texto">' + v_Object.nome + ' </h4> <p style="margin-bottom: 5px;"> <strong>Tel: </strong>' + v_Object.tel + '</p>' + v_Object.endereco + '</li>';
            $.each(v_Object.redesSociais, function(index, redeSocial){
                conteudoLi += "<a href='" + redeSocial["faceboock"] + "'><img src='../img/icon-face.png' target='_blank' alt='Logo Facebook'></a>"
                conteudoLi += "<a href='" + redeSocial["instagram"] + "'><img src='../img/icon-insta.png'target='_blank' alt='Logo Instagram'></a>"             
            })
        });



        var html = '<li class="cidade display-encontre" >' +
            '<img class="img-responsive img-esteticista-encontre" src="../img/nayara-andrade.png">' +
            '<ul style="padding:0" class="informacoes-encontre">' + conteudoLi + conteudoLi2 + '</ul>'
        '</li>';


        $('#esteticistas').html(
            html
        )
        fn_trocarTela(3);
    }

    function fn_carregarEstados(reg){
        switch (reg) {
            case 'norte':
                fn_trocarTela(telasEnum.estado);
                fn_carregar_estados(reg);               
                break;
            case 'nordeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg);
                break;
            case 'CentroOeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            case 'sudeste':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            case 'sul':
                    fn_trocarTela(telasEnum.estado);
                    fn_carregar_estados(reg)
                break;
            default:
                break;
        }
    }
        // carrega os estados
            // selecione o estado
            // mostrar as cidades
            // mostrar todos os revendores da cidade
            // abrir modal com as informações do revendedor
    // eventos
    $('#nordeste, #sul, #sudeste, #norte, #CentroOeste').on("click", function(e){
        var reg = $(this).attr('id');
        fn_carregarEstados(reg);
    });

    // Esperar o clique
    $('#estados .estado').on("click", function(e){
        console.log($(this).data('estado'));
        var reg = $(this).attr('id');
        fn_carregarEstados(reg);

    });


    $('#estados').on("click", ".estado", fn_carregar_cidades);
    $('#cidades').on("click", ".cidade", fn_carregar_revendedores);
    $('.voltarTela').on('click', fn_voltar)
})(jQuery)