(function($){
    $('#fonte-maior').click(function(){
        $('body').addClass('font-2x');
        console.log('ok');
        
    });
    
    $('#fonte-menor').click(function(){
        $('body').removeClass('font-2x');
    });   
})($)