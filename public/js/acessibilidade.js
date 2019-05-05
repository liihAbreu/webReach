(function($){
    // trocar o thema do site
    // aumentar e diminuir tamanho da fonte

    // ferramenta de foco deve seguir o mouse

    function Acessibilidade(){
        // o controle do thema sera dado pelo body
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

    Acessibilidade.prototype = {
        inicio: function(){
            this.eventos();
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