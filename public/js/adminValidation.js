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
        validateProducto(e);
    }
    else if (name == 'vueloBtn') {
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
        (!validateProCategoria(categoria)) &&
        (!validateProMarca(marca))) {
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
    else if (email.indexOf('@', 0) == -1 || last != 'com') {
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
        if (password2 != password) {
            let span = $("<span></span>");
            let strong = $("<strong>The password2 and the password are not equal.</strong>");
            strong.css("color", "red");
            span.append(strong);
            div.html(span);
            return true;
        } else {
            return false;
        }
    }
}

//Validation of User rol
function validateRol(roles) {
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

function validateProName(name) {
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

function validateProFecha(fecha_cad) {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let currentDate = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day;
    let div = $('#fechaDiv');
    div.html("");
    if (fecha_cad == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The fecha field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else if(fecha_cad <= currentDate){
        let span = $("<span></span>");
        let strong = $("<strong>It has to be a date after today.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;;
    }
    return false;
}

function validateProPrecio(precio) {
    let div = $('#precioDiv');
    div.html("");
    if (precio == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The precio field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateDesc(descripcion) {
    let div = $('#desDiv');
    div.html("");
    if (descripcion == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The descripcion field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateStock(stock) {
    let div = $('#stoDiv');
    div.html("");
    if (stock == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The stock field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateCalorias(calorias) {
    let div = $('#calDiv');
    div.html("");
    if (calorias == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The calorias field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validatePeso(peso) {
    let div = $('#pesDiv');
    div.html("");
    if (peso == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The peso field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateHidratos(hidratos) {
    let div = $('#hidDiv');
    div.html("");
    if (hidratos == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The hidratos field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateAzucares(azucares) {
    let div = $('#azuDiv');
    div.html("");
    if (azucares == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The azucares field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateProteinas(proteinas) {
    let div = $('#proDiv');
    div.html("");
    if (proteinas == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The proteinas field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateSal(sal) {
    let div = $('#salDiv');
    div.html("");
    if (sal == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The sal field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateIngredientes(ingredientes) {
    let div = $('#ingDiv');
    div.html("");
    if (ingredientes == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The ingredientes field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

function validateOrigen(origen) {
    let div = $('#oriDiv');
    div.html("");
    if (origen == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The origen field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Producto Categoria
function validateProCategoria(categoria) {
    let cat;
    categoria.each(function () {
        cat = $(this).val();
    });
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
}

//Validation of Producto Marca
function validateProMarca(marca) {
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
}

//Validation of Vuelo origen
function validateAerOri(aer_ori) {
    let origen;
    aer_ori.each(function () {
        origen = $(this).val();
    });
    let div = $('#aer_ori');
    div.html("");
    if (origen.indexOf('Seleccione', 0) == 0) {
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
    if (destino.indexOf('Seleccione', 0) == 0) {
        let span = $("<span></span>");
        let strong = $("<strong>Choose a destination airport.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else if (destino == origen) {
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
    let div = $('#cantDiv');
    div.html("");
    if (cant == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The cantidad field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Vuelo company
function validateCompany(comp) {
    let div = $('#compDiv');
    div.html("");
    if (comp == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The company field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Vuelo fecha
function validateVueFecha(fecha) {
    let d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let currentDate = d.getFullYear() + '-' +
        (month < 10 ? '0' : '') + month + '-' +
        (day < 10 ? '0' : '') + day;
    let div = $('#fechaDiv');
    div.html("");
    if (fecha == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The fecha field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    else if(fecha <= currentDate){
        let span = $("<span></span>");
        let strong = $("<strong>It has to be a date after today.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;;
    }
    return false;
}

//Validation of Vuelo Precio
function validateVuePrecio(precio) {
    let div = $('#preDiv');
    div.html("");
    if (precio == "") {
        let span = $("<span></span>");
        let strong = $("<strong>The precio field is required.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
}

//Validation of Categoria Name
function validateCatName(name) {
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
function validateMarName(name) {
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