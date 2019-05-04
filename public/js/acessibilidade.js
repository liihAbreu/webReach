(function($){
    // trocar o thema do site
    // aumentar e diminuir tamanho da fonte

    // ferramenta de foco deve seguir o mouse

    function Acessibilidade(){
        // o controle do thema sera dado pelo body
        this.body = document.querySelector('body');
        this.themas = ['preto', 'amarelo', 'default'];
        this.focoDivs = {
            acima: document.querySelector('.foco-leitura'),
            abaixo: document.querySelector('.segundo-foco')
        }

        this.focado = false;
        this.btns ={
            aumentarAfonte: document.getElementById('fonte-maior'),
            diminuirfonte:  document.getElementById('fonte-menor'),
            foco: document.getElementById('foco'),
        }

        //botões para controle do nome
        this.btnThemas = document.getElementsByClassName('thema');

        //botões para o controle das fontes
        this.maiorBtn = document.getElementById('fonte-maior');
        this.menorBtn = document.getElementById('fonte-menor');

        //controlar o tamanho da fonte
        this.fonts = ['font-1x', 'font-2x', 'font-3x', 'font-4x'];
        
        // verefica se já existe a font definida pelo usúario no Storage
        this.fontAtual = parseInt( localStorage.getItem('fontUsuario') );
        if(!this.fontAtual){
            localStorage.setItem('fontUsuario', 0);
            this.fontAtual = 0;
        }else{
            this.aumentarFont(parseInt(this.fontAtual));
            
        }

        // verefica se já existe um thema definido pelo usuario
        this.thema = localStorage.getItem('thema');
        if(!this.thema){
            localStorage.setItem("thema", "default");
            this.thema = "default";
        }else{
            this.trocarThema(this.thema);
        }

        this.inicio();
    }

    Acessibilidade.prototype = {
        inicio: function(){
            this.eventos();
        },
        trocarThema: function(el){
            var self = this;
            if( typeof el === "object"){
                var thema = el.dataset.thema;
            }else{
                var thema = el;
                el = $('[data-thema="'+el +'"]');
            }            

            this.themas.forEach(function(th, i){
                self.body.classList.remove(th);
            });
            
            Array.prototype.forEach.call(this.btnThemas, function(th, i) { 
                th.classList.remove('ativo');
            });

            $(el).addClass('ativo');
            this.body.classList.add(thema);

            localStorage.setItem("thema", thema);

        },
        aumentarFont: function(e){
            if(typeof e === 'number'){
                document.getElementsByTagName('body')[0].classList.add(this.fonts[this.fontAtual]);
                sameSize($('.same-size-dep'));
                return
            }
            var qual = typeof e === 'number' ? parseInt(e): parseInt( $(e).data('font') );
            this.fontAtual += parseInt(qual);

            if(this.fontAtual < 0 )
            {
                this.fontAtual = 0;
                return
            }else if ( this.fonts.length -1< this.fontAtual ){
                this.fontAtual = this.fonts.length;
                return
            }                

            Array.prototype.forEach.call(this.fonts, function(font, i) { 
                document.getElementsByTagName('body')[0].classList.remove(font);
            });

            document.getElementsByTagName('body')[0].classList.add(this.fonts[this.fontAtual]);
            sameSize($('.same-size-dep'));
            
            localStorage.setItem('fontUsuario', this.fontAtual);
        },
        eventos: function(){
            var self = this;
            // adiciona evento de foco
            $(this.btns.foco).on("click", function(e){self.foco(this)});
            $(this.btnThemas).on("click", function(e){self.trocarThema(this)});
            $(this.maiorBtn).on("click",  function(e){
                e.preventDefault();
                console.log('teste'); 
                self.aumentarFont(this);
            });
            $(this.menorBtn).on("click",  function(e){ 
                e.preventDefault();
                console.log('teste'); 
                self.aumentarFont(this);
            });
        },
        foco: function(btn){
            btn.classList.toggle('ativo');
            var self = this;
            if(this.focado){
                $('.foco-leitura').hide();
                $('.segundo-foco').hide();
    
                this.focado = false;
                return
            }
            
            this.focado = true;
            $(self.focoDivs.acima).show();
            $(self.focoDivs.abaixo).show();
            

            $(window).on('mousemove', function(e){
                var y = e.pageY;
                var gap = 60;
                if(y < 0)
                {
                    y = 0;
                }
                var top = e.pageY - $(window).scrollTop();
               $(self.focoDivs.acima).css('height', top -  gap);
               var wH = window.innerHeight;
               $(self.focoDivs.abaixo).css('height',  (wH -gap ) - top  );
            })
                        
        },
        
    }

    new Acessibilidade();
     //Controlar o efeito de foco com as setas
})(jQuery)