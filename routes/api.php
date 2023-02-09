<?php
use App\Http\Controllers\ControladorApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::controller(ControladorApi::class)->group(function(){
    Route::get("/categorias" , "mostrar_categorias")->name("mostrar_categorias");
    Route::get("/marcas" , "mostrar_marcas")->name("mostrar_marcas");
    Route::get("/productos" , "mostrar_productos")->name("mostrar_productos");
    Route::get("/aeropuertos" , "mostrar_aeropuertos")->name("mostrar_aeropuertos");
    Route::get("/vuelos" , "mostrar_vuelos")->name("mostrar_vuelos");
    Route::prefix("/buscar")->group(function(){
        Route::get("/categoria/{id}" , "mostrar_buscar_categoria")->name("mostrar_buscar_categoria");
        Route::get("/marcas/{id}" , "mostrar_buscar_marca")->name("mostrar_buscar_marca");
        Route::get("/producto/{id}" , "mostrar_buscar_producto")->name("mostrar_buscar_producto");
        Route::get("/aeropuerto/{id}" , "mostrar_buscar_aeropuerto")->name("mostrar_buscar_aeropuerto");
        Route::get("/vuelo/{id}" , "mostrar_buscar_vuelo")->name("mostrar_buscar_vuelo");
    });
});