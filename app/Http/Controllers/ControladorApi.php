<?php
namespace App\Http\Controllers;
use App\Models\Aeropuerto;
use App\Models\Categoria;
use App\Models\Marca;
use App\Models\Producto;
use App\Models\Vuelo;
use Illuminate\Http\Request;
class ControladorApi extends Controller
{
    public function mostrar_categorias(){
        $categorias=Categoria::all();
        return $categorias;
    }
    public function mostrar_marcas(){
        $marcas=Marca::all();
        return $marcas;
    }
    public function mostrar_productos(){
        $productos=Producto::all();
        return $productos;
    }
    public function mostrar_aeropuertos(){
        $aeropuertos=Aeropuerto::all();
        return $aeropuertos;
    }
    public function mostrar_vuelos(){
        $vuelos=Vuelo::all();
        return $vuelos;
    }
    public function mostrar_buscar_categoria($id){
        $categoria=Categoria::find($id);
        return $categoria;
    }
    public function mostrar_buscar_marca($id){
        $marca=Marca::find($id);
        return $marca;
    }
    public function mostrar_buscar_producto($id){
        $producto=Producto::find($id);
        return $producto;
    }
    public function mostrar_buscar_aeropuerto($id){
        $aeropuerto=Aeropuerto::find($id);
        return $aeropuerto;
    }
    public function mostrar_buscar_vuelo($id){
        $vuelo=Vuelo::find($id);
        return $vuelo;
    }
}