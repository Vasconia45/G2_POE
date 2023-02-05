$(document).ready(inicio);

function inicio(){
    let button = $('.adminValidation');
    button.on('click', validation);
}

function validation(){
    let name = $(this).attr('name');
    if(name == 'userBtn'){
        validateUser();
    }
    else if(name == 'categoriaBtn'){
        validateCategoria();
    }
    else if(name == 'marcaBtn'){
        validateMarca();
    }
    else if(name == 'productoBtn'){
        validateProducto();
    }
    else if(name == 'vueloBtn'){
        validateVuelo();
    }
}

function validateUser(){
    let name = $('#nombre').val();
    let lastname = $('#apellido').val();
    let email = $('#email').val();
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

function validateCategoria(){
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateName(name))) {
    }
    else{
        e.preventDefault();
    }
}

function validateMarca(){
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateName(name))) {
    }
    else{
        e.preventDefault();
    }
}

function validateProducto(){
    alert('producto');
}

function validateVuelo(){
    let aer_ori = $('#aeropuerto_ori');
    aer_ori.each(function(){
        alert($(this).val());
    });

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
    if (name == "") {
        return true;
    }
    return false;
}

function validateLastname(lastname) {
    if (lastname == "") {
        return true;
    }
    return false;
}

function validateEmail(email) {
    let last = email.split('.').slice(-1);
    if (email == "") {
        return true;
    }
    else if(email.indexOf('@', 0) == -1 || last != 'com'){
        return true;
    }
    return false;
}

function validatePassword(password) {
    if (password == "") {
        return true;
    }
    return false;
}

function validatePassword2(password2) {
    let password = $('#registerPass').val();
    if (password2 == "") {
        return true;
    }
    else {
        if(password2 != password){
            return true;
        }else{
            return false;
        }
    }
}