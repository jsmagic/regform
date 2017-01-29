$(document).ready(function(){
    $('form').fadeIn(3000);

    $('li > input[type="text"], select').hover(function () {
        $(this).toggleClass("focus")
    });
    $('form').submit(function () {
     return false;
    });
});

function SelectBox(id){
    for (i=1; i<=2; i++){
        document.getElementById("box"+i).checked = false;
    }
    document.getElementById(id).checked = true;
}

function Validation() {
    var first_name = document.registration.first_name;
    var last_name = document.registration.last_name;
    var age = document.registration.age;
    var email = document.registration.email;
    var city = document.registration.city;
    var country = document.registration.country;
    var post_code = document.registration.post_code;

    if (ValFirstName(first_name)) {
        $("#first_name").css("border", "1px solid gray");
        if (ValLastName(last_name)) {
            $("#last_name").css("border", "1px solid gray");
            if (ValAge(age)) {
                $("#age").css("border", "1px solid gray");
                if(ValEmail(email)){
                    $("#email").css("border", "1px solid gray");
                    if (ValCity(city)) {
                        $("#city").css("border", "1px solid gray");
                        if (ValCountry(country)){
                            $("#country").css("border", "1px solid gray");
                            if (ValPostCode(post_code)){
                                $("#post_code").css("border", "1px solid gray");
                                alert('Form Succesfully Submitted');
                                $("li input").css("border", "1px solid gray");
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
}

function ValFirstName(str) {
    if(str.value.length != 0) {
        var pattern = /^[a-z]+$/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#first_name").css("border", "1px solid red");
            alert('Please correct your First Name field (letters only)');
            $("#first_name").focus();
        }
    }
    else {
        $("#first_name").css("border", "1px solid red");
        alert('Please fill your First Name field');
        $("#first_name").focus();
    }

}

function ValLastName(str) {
    if(str.value.length != 0) {
        var pattern = /^[a-z]+$/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#last_name").css("border", "1px solid red");
            alert('Please correct your Last Name field (letters only)');
            $("#last_name").focus();
        }
    }
    else {
            $("#last_name").css("border", "1px solid red");
            alert('Please fill your Last Name field');
            $("#last_name").focus();
    }
}

function ValAge(str) {
    if(str.value.length != 0) {
        var pattern = /^[1-9]+$/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#age").css("border", "1px solid red");
            alert('Please correct your Age field (numbers only)');
            $("#age").focus();
        }
    }
    else {
        return true;
    }
}

function ValEmail(str) {
    if(str.value.length != 0) {
        var pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#email").css("border", "1px solid red");
            alert('Please correct your Email Address with valid address');
            $("#email").focus();
        }
    }
    else {
        $("#email").css("border", "1px solid red");
        alert('Please fill your Email field');
        $("#email").focus();
    }
}

function ValCity(str) {
    if(str.value.length != 0) {
        var pattern = /^[a-z]+$/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#city").css("border", "1px solid red");
            alert('Please correct your City field (letters only)');
            $("#city").focus();
        }
    }
    else {
        $("#city").css("border", "1px solid red");
        alert('Please fill your City field');
        $("#city").focus();
    }
}

function ValCountry(str){
    if(str.value != "Default"){
        return true;
    }
    else {
        $("#country").css("border", "1px solid red");
        alert('Please choose your country');
    }
}

function ValPostCode(str){
    if(str.value.length != 0) {
        var pattern = /^[0-9]+$/;
        if (str.value.match(pattern)) {
            return true;
        }
        else {
            $("#post_code").css("border", "1px solid red");
            alert('Please correct your Post Code (numbers only)');
            $("#post_code").focus();
        }
    }
    else {
        return true;
    }
}