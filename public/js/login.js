$(document).ready(inicio);

function inicio() {
    let signInButton = $('#signIn');
    let signUpButton = $('#signUp');
    let registerBtn = $('#regisBtn');
    signUpButton.on('click', search);
    signInButton.on('click', search2);
    registerBtn.on('click', validateRegister);
}

function search() {
    let main = $('#main');
    main.addClass("right-panel-active");
}

function search2() {
    let main = $('#main');
    main.removeClass("right-panel-active");
}

function validateRegister(e) {
    let name = $('#inputNombre').val();
    let lastname = $('#inputApell').val();
    let email = $('#regEmail').val();
    let password = $('#registerPass').val();
    let password2 = $('#registerPass2').val();

    if ((!validateName(name)) &&
        (!validateLastname(lastname)) &&
        (!validateEmail(email)) &&
        (!validatePassword(password)) &&
        (!validatePassword2(password2))) {
    }
    else{
        e.preventDefault();
    }
}

function validateName(name) {
    let div = $('#nomDiv');
    div.html("");
    if (name == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The name field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateLastname(lastname) {
    let div = $('#appDiv');
    div.html("");
    if (lastname == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The lastname field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateEmail(email) {
    let div = $('#emailDiv');
    div.html("");
    let last = email.split('.').slice(-1);
    if (email == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The email file is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else if(email.indexOf('@', 0) == -1 || last != 'com'){
        let span = $("<span></span>");
        let strong = $("<strong>You need a valid email address.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validatePassword(password) {
    let div = $('#pass1Div');
    div.html("");
    if (password == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The password field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validatePassword2(password2) {
    let div = $('#pass2Div');
    let password = $('#registerPass').val();
    div.html("");
    if (password2 == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The password2 field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else {
        if(password2 != password){
            let span = $("<span></span>");
            let strong = $("<strong>The password2 and the password are not equal.</strong>");
            strong.css("color", "red");
            span.append(strong);
            div.html(span);
            return true;
        }else{
            return false;
        }
    }
}
