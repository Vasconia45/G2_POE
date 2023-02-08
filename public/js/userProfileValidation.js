$(document).ready(inicio);

function inicio(){
    let button = $('#userValidationBtn');
    button.on('click', validation);
}


function validation(e){
    let name = $('#nombre').val();
    let lastname = $('#apellido').val();
    let password2 = $('#registerPass2').val();

    if ((!validateName(name)) &&
        (!validateLastname(lastname)) &&
        (!validatePassword2(password2))) {
    }
    else{
        e.preventDefault();
    }
}

function validateName(name){
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

function validateLastname(lastname){
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

function validatePassword2(password2){
    let password = $('#registerPass').val();
    let div = $('#pass2Div');
    div.html("");
    if (password != "" && password2 == "") {
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