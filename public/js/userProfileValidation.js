$(document).ready(inicio);

function inicio(){
    let button = $('#userValidationBtn');
    button.on('click', validation);
}


function validation(){
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
    if(name == ""){
        return true;
    }
    return false;
}

function validateLastname(lastname){
    if(lastname == ""){
        alert("lastname");
        return true;
    }
    return false;
}

function validatePassword2(password2){
    let password = $('#registerPass').val();
    if(password2 != password){
        return true;
    }
    return false;
}