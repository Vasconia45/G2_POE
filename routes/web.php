<?php

use App\Http\Controllers\ControladorAdmin;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ControladorProductos;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use App\Models\Marca;
use App\Models\Categoria;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $categorias=Categoria::all();
    $marcas=Marca::all();
    return view('welcome', ["marcas" => $marcas , "categorias" => $categorias]);
});

Route::get('locale/{locale}', function ($locale){
    session()->put('locale',$locale);
    return Redirect::back();
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::controller(ControladorAdmin::class)->group(function(){
    Route::get('/home/lista_usuarios', 'mostrarUsuarios')->name('admin_lista_usuarios')->middleware('admin');

    Route::delete('/home/lista_usuarios/{id}', 'borrar_usuario')->name('admin_lista_usuarios_borrar');

    Route::put('/home/lista_usuarios/ascender/{id}', 'ascender_usuario')->name('admin_lista_usuarios_ascender');

    Route::put('/home/lista_usuarios/degradar/{id}', 'degradar_usuario')->name('admin_lista_usuarios_degradar');

    Route::get('/home/lista_usuarios/modificar/{id}' , 'mostrarEditarUsuario')->name('admin_lista_usuarios_mostrar_modificar')->middleware('admin');

    Route::post('/home/lista_usuarios/modificar/{id}' , 'editarUsuario')->name('admin_lista_usuarios_modificar');

    Route::get('/home/lista_usuarios/recuperar' , 'mostrarRecuperar')->name('admin_lista_usuarios_mostrar_recuperar')->middleware('admin');

    Route::post('/home/lista_usuarios/recuperar/{id}' , 'recuperar')->name('admin_lista_usuarios_recuperar');

    Route::post('/home/lista_usuarios/recuperar/eliminar/{id}' , 'borrar_del_todo')->name('admin_lista_usuarios_borrar_del_todo');

    Route::get('/home/crear_usuarios', 'mostrarCrearUsuario')->name('admin_mostar_crear_usuarios')->middleware('admin');

    Route::post('/home/crear_usuarios', 'crear_usuario')->name('Admin_crear_usuario');

    Route::get('/home/crear_productos', 'mostrarCrearProducto')->name('admin_mostar_crear_productos')->middleware('admin');

    Route::post('/home/crear_productos', 'crear_producto')->name('Admin_crear_producto');

    Route::get('/home/lista_productos', 'mostrarProductos')->name('admin_lista_productos')->middleware('admin');

    Route::delete('/home/lista_productos/{id}', 'borrar_producto')->name('admin_lista_productos_borrar');

    Route::get('/home/crear_categorias', 'mostrarCrearCategoria')->name('admin_mostar_crear_categorias')->middleware('admin');

    Route::post('/home/crear_categorias', 'crear_categoria')->name('Admin_crear_categoria');

    Route::get('/home/lista_categorias', 'mostrarCategorias')->name('admin_lista_categorias')->middleware('admmin');

    Route::delete('/home/lista_categorias/{id}', 'borrar_categoria')->name('admin_lista_categorias_borrar');

    Route::get('/home/crear_marcas', 'mostrarCrearMarca')->name('admin_mostar_crear_marcas')->middleware('admin');

    Route::post('/home/crear_marcas', 'crear_marca')->name('Admin_crear_marca');

    Route::get('/home/lista_marcas', 'mostrarMarcas')->name('admin_lista_marcas')->middleware('admin');

    Route::delete('/home/lista_marcas/{id}', 'borrar_marca')->name('admin_lista_marcas_borrar');

    Route::get('/home/crear_vuelos', 'mostrarCrearVuelo')->name('admin_mostar_crear_vuelos')->middleware('admin');

    Route::post('/home/crear_vuelos', 'crear_vuelo')->name('Admin_crear_vuelo');

    Route::get('/home/lista_vuelos', 'mostrarVuelos')->name('admin_lista_vuelos')->middleware('admin');

    Route::delete('/home/lista_vuelos/{id}', 'borrar_vuelo')->name('admin_lista_vuelos_borrar');
});

Route::get('/verify', [RegisterController::class, 'verifyUser'])->name('verify.user');

Route::controller(ControladorProductos::class)->group(function(){
    Route::post('/lista_productos/{id}' , "comprar")->name('productos_comprar');

    Route::get("/lista_productos" , "mostrar_lista_de_productos")->name('productos_mostrar_lista_productos');

    Route::get("/pedido" , "mostrar_pedido")->name('productos_mostrar_pedido');

    Route::get('/lista_productos/busqueda', 'buscarProducto')->name('buscar.productos');

    Route::post('/lista_productos/comentar/{id}' , 'comentar')->name("productos_comentar");

});


Route::controller(UsuarioController::class)->group(function(){

    Route::get('/home/datos_cuenta', 'index')->name('modificar.cuenta');

    Route::get('/home/datos_cuenta/{id}' , 'mostrarUpdate')->name("showeditar.cuenta");

    Route::put('/home/datos_cuenta/{id}/editar' , 'update')->name("editar.cuenta");

    Route::delete('/home/datos_cuenta/{id}', 'destroy')->name('borrar.cuenta');

    Route::get('/home/vuelos_lista', 'mostrar_vuelos')->name('mostrar_vuelos');

});