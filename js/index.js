let modal = $('#modal');

$(function(){
    $('img').click(function(){
        let idImg = $(this).attr('id');
        console.log(idImg);
        var srcImg = $(this).attr('src');
        console.log(srcImg);
        showModal(idImg, srcImg);
    })
    hideModal();

    /*NavBar*/ 
    $('.fa-bars').click(function(){
        $('header nav ul li').addClass('show');
        $('.fa-window-close').css('display', 'block');
        $('.fa-bars').css('display', 'none')
    })

    $('.fa-window-close').click(function(){
        $('header nav ul li').removeClass('show');
        $('.fa-bars').css('display', 'block');
        $('.fa-window-close').css('display', 'none')
    })
})

function showModal(idImg, srcImg){
    let imagen = idImg;
    let src = srcImg;
    $('imgModal').attr('src', src);
    modal.css('display', 'block');
}

function hideModal(){
    $('.cerrar').click(function(){
        modal.css('display', 'none')
    });
}
