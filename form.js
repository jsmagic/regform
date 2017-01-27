$(document).ready(function(){
    $('#form').fadeIn(2000);

    $('li input').hover(function () {
        $('li input').toggleClass("focus")
    });
});