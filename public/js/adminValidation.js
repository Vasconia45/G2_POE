$(document).ready(inicio);

function inicio() {
    let button = $('.adminValidation');
    button.on('click', validation);
}

function validation() {
    let name = $(this).attr('name');
    if (name == 'userBtn') {
        validateUser();
    }
    else if (name == 'categoriaBtn') {
        validateCategoria();
    }
    else if (name == 'marcaBtn') {
        validateMarca();
    }
    else if (name == 'productoBtn') {
        validateProducto();
    }
    else if (name == 'vueloBtn') {
        validateVuelo();
    }
}

function validateUser() {
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
    else {
        e.preventDefault();
    }
}

function validateCategoria() {
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateName(name))) {
    }
    else {
        e.preventDefault();
    }
}

function validateMarca() {
    let name = $('#nombre').val().split(' ').join('');
    if ((!validateName(name))) {
    }
    else {
        e.preventDefault();
    }
}

function validateProducto() {
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


    if ((!validateName(name)) &&
        (!validateFecha(fecha_cad)) &&
        (!validatePrecio(precio)) &&
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

function validateVuelo() {
    let aer_ori = $('#aeropuerto_ori');
    let aer_des = $('#aeropuerto_des');
    let cant_pas = $('#cantidad_pasajeros').val();
    let company = $('#compañia').val();
    let fecha = $('#fecha').val();
    let precio = $('#precio').val();

    if ((!validateAerOri(aer_ori)) &&
        (!validateAerDes(aer_des)) &&
        (!validatePasajeros(cant_pas)) &&
        (!validateCompany(company)) &&
        (!validateFecha(fecha)) &&
        (!validatePrecio(precio))) {
    }
    else {
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
let div = $('#categoriaMSG');
    div.html("");
    if(cat.indexOf('Seleccione', 0) == 0){
        let span = $("<span></span>");
        let strong = $("<strong>Choose a category.</strong>");
        strong.css("color", "red");
        span.append(strong);
        div.html(span);
        return true;
    }
    return false;
function validateEmail(email) {
    let last = email.split('.').slice(-1);
    if (email == "") {
        return true;
    }
    else if (email.indexOf('@', 0) == -1 || last != 'com') {
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
        if (password2 != password) {
            return true;
        } else {
            return false;
        }
    }
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

function validateCategoria(categoria) {
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
}

function validateMarca(marca) {
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

function validateAerDes(aer_des) {
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
    return false;
}

function validatePasajeros(cant) {
    if (cant == "") {
        return true;
    }
    return false;
}

function validateCompany(comp) {
    if (comp == "") {
        return true;
    }
    return false;
}