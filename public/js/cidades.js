    // Pegar a página dos cursos
    // solicitação 
    // recebe os dados
    function pegarDatas(idProduto){
        var url = 'https://wsbm.happybiz.com.br/listarCursos?empresa=001&filial=0003&idProduto=' + idProduto;
            $("#spinner").toggle();
            $(".fundo-spinner").toggle();
            axios.get(url)
                .then(function(res){
                    var agenda = $('#agendaTop');
                    var agendaBottom = $('#agenda-c');
                    var agendaBottomSemSlick = $('#agendaSemSlick');
                    if(res.data.length < 1){
                        $("#spinner").toggle();
                        $(".fundo-spinner").toggle();
                        $(agenda).append(
                            '<div class="agenda-item" style="margin-bottom:30px">' +
                            '<p> Nenhuma data registrada até o momento. </p>' +
                        '</div>'                  
                        )   

                        $(agendaBottomSemSlick).append(                
                        '<div class="agenda-item abrirAgenda text-center text-inverse">' +
                            '<p> Nenhuma data registrada até o momento. </p>' +
                        '</div>'                  
                        );
                        return
                    }
                    var listaCursos = res.data.slice(0, 60);
                    $('.carregando').fadeOut(0);
                    $("#spinner").toggle();
                    $(".fundo-spinner").toggle();
                    listaCursos.forEach(function(el){
                        $(agenda).append(
                            '<div class="agenda-item" style="margin-bottom:30px">' +
                            '<p class="data" style="max-width: 200px; display: block; margin: auto; text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden;" >' + el.dataInicial  + '</p>' +
                            '<p class="cidade">' + el.nomeLocalidade + '</p>' +
                            '<p style="font-size:14px;text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">' + el.nomeTurma + '</p>' +
                            '<a style="color:white" href="' + el.linkInscricaoCurso  +  '"target="_blanck">Inscrição</a>' +
                        '</div>'                  
                        )
                        $(agendaBottom).slick('slickAdd',                
                        '<div class="agenda-item abrirAgenda text-center">' +
                            '<p class="data"  style="max-width: 200px; display: block; margin: auto; text-overflow: ellipsis; white-space: nowrap; overflow-x: hidden;" >' + el.dataInicial  + '</p>' +
                            '<p class="cidade">' + el.nomeLocalidade + '</p>' +
                            '<a style="color:white" href="' + el.linkInscricaoCurso  +  '"target="_blanck">Inscrição</a>' +
                        '</div>'                  
                        );
                    })                 
                })
                .catch(function(err){
                    console.log(err)
                })
    }
    
    pegarDatas("0000000024");