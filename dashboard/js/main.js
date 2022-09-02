$('document').ready(function(){
    $('.slider').flumen({
        'arrows': true,
        'margin': 5,
        'events':{
            'init': function(event, o) {
                console.log('KURAC');
            }
        }
    });

    $('.dot').on('click', function(){
        var num = $(this).data('num');
        $('.slider').trigger('flumen.goto', num);
    });

    $('.larr').on('click', function(){
        $('.slider').trigger('flumen.left');
    });

    $('.rarr').on('click', function(){
        $('.slider').trigger('flumen.right');
    });
});