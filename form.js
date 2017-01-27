$(document).ready(function(){
    $('#form').fadeIn(2000);

    $('li input').hover(function () {
        $(this).toggleClass("focus")
    });
});