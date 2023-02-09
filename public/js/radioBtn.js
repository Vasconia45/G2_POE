$(document).ready(inicio);

function inicio(){
    cargarMarcas();
}

function cargarMarcas(){
    $.get("http://localhost:8000/api/marcas", function(data){
        let selectMarc = $("<select name='marcas'></select>");
        let defaultOption = $("<option value='0'>Marcas:</option>");
        selectMarc.append(defaultOption);
        for(let $i = 0; $i < data.length; $i++){
            let marcasOption = $('<option></option>');
            marcasOption.text(data[$i].nombre);
            selectMarc.append(marcasOption);
        }
        let div = $("#div");
        div.html("");
        div.append(selectMarc);
    });
    cargarCategorias();
}

function cargarCategorias(){
    $.get("http://localhost:8000/api/categorias", function(data){
        let selectCat = $("<select name='categorias'></select>");
        let defaultOption = $("<option value='0'>Categorias:</option>");
        selectCat.append(defaultOption);
        for(let $i = 0; $i < data.length; $i++){
            let categoriasOption = $('<option></option>');
            categoriasOption.text(data[$i].nombre);
            selectCat.append(categoriasOption);
        }
        let div = $("#div");
        div.append(selectCat);
    });
}