$(document).ready(function(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    $('#mycarousel').carousel({interval:5000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause'); 
        }
    });
    
    $('#naankhatai').click(function(){
        $('#nkModal').modal('show');   
    });
    $('#hotchoc').click(function(){
        $('#hcModal').modal('show');   
    });
    $('#shakarpara').click(function(){
        $('#spModal').modal('show');   
    });
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });
    $('#badam').click(function(){
        $('#bhModal').modal('show');   
    });
});

