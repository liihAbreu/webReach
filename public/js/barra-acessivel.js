(function($){
    var fontes = ['font-1x','font-2x','font-3x','font-4x'];

    $('#fonte-maior').click(function(){
        for(var i= 0; i < fontes.length; i++){
            var fonteAtual = i;
            if(fontes[0]){
                fonteAtual = fontes[i+1];
            } 
        }
        console.log(fonteAtual);
        
    });

})($)