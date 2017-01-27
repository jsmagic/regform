$(document).ready(function(){
    $('#form').fadeIn(2000);

    $('li input').hover(function () {
        $(this).toggleClass("focus")
    });
    $('form').submit(function () {
     return false;
    });
});

function Validation() {
    var first_name = document.registartion.first_name;
    var last_name = document.registartion.last_name;
    var age = document.registartion.age;

    if (ValFirstName(first_name)) {
        if (ValLastName(last_name)) {
            if (ValAge(age)) {
                alert('Form Succesfully Submitted');
                $("li input").css("border", "1px solid gray")
            }
        }
    }
    else {
        alert('Form NOT Submitted');
    }
}

function ValFirstName(str) {
    var pattern = /^[a-z]+/g;
    if (str.value.match(pattern) || str.length <= 15 || str.length > 0) {
        return true;
    }
    else {
        $("#first_name").css("border", "1px solid red")
    }
}

function ValLastName(str) {
    var pattern = /^[a-z]+/g;
    if (str.value.match(pattern) || str.length <= 15 || str.length > 0) {
        return true;
    }
    else {
        $("#first_name").css("border", "1px solid red")
    }
}

function ValAge(age) {
    if (age.value > 0 || age.value < 100) {
        return true;
    }
    else {
        $("#first_name").css("border", "1px solid red")
    }
}
