$(document).ready(inicio);

function inicio() {
    let button = $('.adminValidation');
    button.on('click', validation);
}

function validation(e) {
    let name = $(this).attr('name');
    if (name == 'userBtn') {
        validateUser(e);
    }
    else if (name == 'categoriaBtn') {
        validateCategoria(e);
    }
    else if (name == 'marcaBtn') {
        validateMarca(e);
    }
    else if (name == 'productoBtn') {
        alert('producto');
        validateProducto(e);
    }
    else if (name == 'vueloBtn') {
        alert('vuelo');
        validateVuelo(e);
    }
}

function validateUser(e) {
    let name = $('#nombre').val();
    let lastname = $('#apellido').val();
    let email = $('#email').val();
    let password = $('#registerPass').val();
    let password2 = $('#registerPass2').val();
    let rol = $('#rol').val().split(' ').join('');

    if ((!validateName(name)) &&
        (!validateLastname(lastname)) &&
        (!validateEmail(email)) &&
        (!validatePassword(password)) &&
        (!validatePassword2(password2)) &&
        (!validateRol(rol))) {
    }
    else {
        e.preventDefault();
    }
}

function validateCategoria(e) {
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateCatName(name))) {
    }
    else {
        e.preventDefault();
    }
}

function validateMarca(e) {
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateMarName(name))) {
    }
    else {
        e.preventDefault();
    }
}

function validateProducto(e) {
    let name = $('#name').val();
    let fecha_cad = $('#fecha_cad').val();
    let precio = $('#precio').val();
    let descripcion = $('#descripcion').val();
    let stock = $('#stock').val();
    let calorias = $('#calorias').val();
    let peso = $('#peso').val();
    let hidratos = $('#hidratos').val();
    let azucares = $('#azucares').val();
    let proteinas = $('#proteinas').val();
    let sal = $('#sal').val();
    let ingredientes = $('#ingredientes').val();
    let origen = $('#origen').val();
    let categoria = $('#categoria');
    let marca = $('#marca');


    if ((!validateProName(name)) &&
        (!validateProFecha(fecha_cad)) &&
        (!validateProPrecio(precio)) &&
        (!validateDesc(descripcion)) &&
        (!validateStock(stock)) &&
        (!validateCalorias(calorias)) &&
        (!validatePeso(peso)) &&
        (!validateHidratos(hidratos)) &&
        (!validateAzucares(azucares)) &&
        (!validateProteinas(proteinas)) &&
        (!validateSal(sal)) &&
        (!validateIngredientes(ingredientes)) &&
        (!validateOrigen(origen)) &&
        (!validateCategoria(categoria)) &&
        (!validateMarca(marca))) {
    }
    else {
        e.preventDefault();
    }
}

function validateVuelo(e) {
    let aer_ori = $('#aeropuerto_ori');
    let aer_des = $('#aeropuerto_des');
    let cant_pas = $('#cantidad_pasajeros').val();
    let company = $('#compañia').val();
    let fecha = $('#fecha').val();
    let precio = $('#precio').val();

    if ((!validateAerOri(aer_ori)) &&
        (!validateAerDes(aer_des, aer_ori)) &&
        (!validatePasajeros(cant_pas)) &&
        (!validateCompany(company)) &&
        (!validateVueFecha(fecha)) &&
        (!validateVuePrecio(precio))) {
    }
    else {
        e.preventDefault();
    }
}

//Validation of User name
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

//Validation of User apellido
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

//Validation of User email
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

//Validation of User first password
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

//Validation of User confirm password
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

//Validation of User rol
function validateRol(roles){
    let div = $('#rolDiv');
    div.html("");
    if (roles.indexOf('Seleccione') == 0) {
        let span = $("<span></span>");
        let strong = $("<strong>Choose a rol.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateProName(name){

}
function validateFecha(fecha_cad) {
    if (fecha_cad == "") {
        return true;
    }
    return false;
}

function validatePrecio(precio) {
    if (precio == "") {
        return true;
    }
    return false;
}

function validateDesc(descripcion) {
    if (descripcion == "") {
        return true;
    }
    return false;
}

function validateStock(stock) {
    if (stock == "") {
        return true;
    }
    return false;
}

function validateCalorias(calorias) {
    if (calorias == "") {
        return true;
    }
    return false;
}

function validatePeso(peso) {
    if (peso == "") {
        return true;
    }
    return false;
}

function validateHidratos(hidratos) {
    if (hidratos == "") {
        return true;
    }
    return false;
}

function validateAzucares(azucares) {
    if (azucares == "") {
        return true;
    }
    return false;
}

function validateProteinas(proteinas) {
    if (proteinas == "") {
        return true;
    }
    return false;
}

function validateSal(sal) {
    if (sal == "") {
        return true;
    }
    return false;
}

function validateIngredientes(ingredientes) {
    if (ingredientes == "") {
        return true;
    }
    return false;
}

function validateOrigen(origen) {
    if (origen == "") {
        return true;
    }
    return false;
}

//Validation of Vuelo Categoria
/*function validateCategoria(categoria) {
    let cat;
    categoria.each(function () {
        cat = $(this).val();
        let div = $('#categoriaMSG');
        div.html("");
        if (cat.indexOf('Seleccione', 0) == 0) {
            let span = $("<span></span>");
            let strong = $("<strong>Choose a category.</strong>");
            strong.css("color", "red");
            span.append(strong);
            div.html(span);
            return true;
        }
        return false;
    });
}*/

//Validation of Vuelo Marca
/*function validateMarca(marca) {
    let marc;
    marca.each(function () {
        marc = $(this).val();
    });
    let div = $('#marcaMSG');
    div.html("");
    if (marc.indexOf('Seleccione', 0) == 0) {
        let span = $("<span></span>");
        let strong = $("<strong>Choose a brand.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}*/

//Validation of Vuelo origen
function validateAerOri(aer_ori) { 
    let origen;
    aer_ori.each(function () {
        origen = $(this).val();
    });
    let div = $('#aer_ori');
    div.html("");
    if (origen.indexOf('Seleccione') != -1) {
        let span = $("<span></span>");
        let strong = $("<strong>Choose an departure airport.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Vuelo destino
function validateAerDes(aer_des, aer_ori) {
    let origen;
    aer_ori.each(function () {
        origen = $(this).val();
    });
    let destino;
    aer_des.each(function () {
        destino = $(this).val();
    });
    let div = $('#aer_des');
    div.html("");
    alert(destino);
    if (destino.indexOf('Seleccione', 0) == 0) {
        let span = $("<span></span>");
        let strong = $("<strong>Choose a destination airport.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else if(destino == origen){
        let span = $("<span></span>");
        let strong = $("<strong>Choose a another destination.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Vuelo pasajeros
function validatePasajeros(cant) {
    if (cant == "") {
        return true;
    }
    return false;
}

//Validation of Vuelo company
function validateCompany(comp) {
    if (comp == "") {
        return true;
    }
    return false;
}

//Validation of Categoria Name
function validateCatName(name){
    let div = $('#catDiv');
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

//Validation of Marca Name
function validateMarName(name){
    let div = $('#marDiv');
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