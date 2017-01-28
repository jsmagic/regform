$(document).ready(function(){
    $('#form').fadeIn(2000);

    $('li input, select').hover(function () {
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
    var first_name = document.registartion.first_name;
    var last_name = document.registartion.last_name;
    var age = document.registartion.age;
    var email = document.registartion.email;
    var city = document.registartion.city;
    var country = document.registartion.country;
    var post_code = document.registartion.post_code;
    var male_checkbox = document.registartion.male;
    var female_checkbox = document.registartion.female;

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
                                if (ValSex(male_checkbox, female_checkbox)) {
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
}

function ValFirstName(str) {
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

function ValLastName(str) {
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
    var pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+/;
    if(str.value.match(pattern)){
        return true;
    }
    else {
        $("#email").css("border", "1px solid red");
        alert('Please correct your Email Address with valid address');
        $("#email").focus();
    }
}

function ValCity(str) {
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
    var pattern = /^[0-9]+$/;
    if(str.value.match(pattern)){
        return true;
    }
    else {
        $("#post_code").css("border", "1px solid red");
        alert('Please correct your Post Code (numbers only)');
        $("#post_code").focus();
    }
}

function ValSex(male, female){
    if(male.checked | female.checked){
        return true;
    }
    else {
        alert('Please choose your gender');
    }
}