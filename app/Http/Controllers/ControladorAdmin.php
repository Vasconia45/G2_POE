<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use App\Models\Marca;
use App\Models\Producto;
use App\Models\User;
use App\Models\Vuelo;
use App\Models\Role;
use App\Models\Pedido;
use Illuminate\Support\Facades\Hash;
use App\Models\Aeropuerto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class ControladorAdmin extends Controller
{
    public function mostrarUsuarios(){
        if(Auth()->user()->id == 1){
            $usuarios = User::where('id','!=', 1)->get();
            return view("vistas_admin.lista_usuarios")->with(['usuarios' => $usuarios]);
        }else{
            $usuarios = User::where('id','!=', 1)
            ->where('role_id','!=', 1)
            ->get();
            return view("vistas_admin.lista_usuarios")->with(['usuarios' => $usuarios]);
        }
    }

    public function mostrarProductos(){
        $productos = Producto::all();
        return view("vistas_admin.lista_productos")->with("productos",$productos);
    }

    public function mostrarCategorias(){
        $categorias = Categoria::all();
        return view("vistas_admin.lista_categorias")->with("categorias",$categorias);
    }

    public function mostrarMarcas(){
        $marcas = Marca::all();
        return view("vistas_admin.lista_marcas")->with("marcas",$marcas);
    }

    public function mostrarVuelos(){
        $vuelos = Vuelo::all();
        return view("vistas_admin.lista_vuelos")->with("vuelos",$vuelos);
    }

    public function mostrarFormAñadirProducto(){
        return view("form_añadir_producto");
    }

    public function borrar_usuario($id){
        $usuario=User::find($id);
        $usuario->delete();
        return redirect("/home/lista_usuarios");
    }

    public function borrar_producto($id){
        $producto=Producto::find($id);
        $producto->delete();
        return redirect("/home/lista_productos");
    }

    public function borrar_categoria($id){
        $categoria=Categoria::find($id);
        $categoria->delete();
        return redirect("/home/lista_categorias");
    }

    public function borrar_marca($id){
        $marca=Marca::find($id);
        $marca->delete();
        return redirect("/home/lista_marcas");
    }

    public function borrar_vuelo($id){
        $vuelo=Vuelo::find($id);
        $vuelo->delete();
        return redirect("/home/lista_vuelos");
    }

    public function ascender_usuario($id){
        $usuario=User::find($id);
        $usuario->role_id=1;
        $usuario->save();
        return redirect("/home/lista_usuarios");
    }

    public function degradar_usuario($id){
        $usuario=User::find($id);
        $usuario->role_id=2;
        $usuario->save();
        return redirect("/home/lista_usuarios");
    }

    public function mostrarEditarUsuario($id){
        $usuario=User::find($id);
            return view("vistas_admin.modificar_usuario")->with(['usuario' => $usuario]);
    }

    public function editarUsuario($id,Request $request){
        $user = User::find($id);
        if($request->email == $user->email){
            if($request->password == null){
                $validation = $request->validate([
                    'nombre' => ['required', 'string'],
                    'apellido' => ['required', 'string'],
                    'email' => ['required'],
                ]);
                if($validation){
                    $user->nombre = $request->nombre;
                    $user->apellido = $request->apellido;
                    $user->email = $request->email;
                    $user->save();
                    return redirect()->route('admin_lista_usuarios');
                }
            }else{
                $validation = $request->validate([
                    'nombre' => ['required', 'string'],
                    'apellido' => ['required', 'string'],
                    'email' => ['required'],
                    'password' => ['required', 'string'],
                    'password2' => ['required', 'string', 'same:password'],
                ]);
                if($validation){
                    $user->nombre = $request->nombre;
                    $user->apellido = $request->apellido;
                    $user->email = $request->email;
                    $user->password = Hash::make($request->password);
                    $user->save();
                    return redirect()->route('admin_lista_usuarios');
                }
            }
        }
        else{
            if($request->password == null){
                $validation = $request->validate([
                    'nombre' => ['required', 'string'],
                    'apellido' => ['required', 'string'],
                    'email' => ['required', 'string', 'email', 'max:255', 'unique:users' ,'regex:/^[a-zA-z0-9._-]+@\w+\.[com]+/'],
                ]);
                if($validation){
                    $user->nombre = $request->nombre;
                    $user->apellido = $request->apellido;
                    $user->email = $request->email;
                    $user->save();
                    return redirect()->route('admin_lista_usuarios');
                }
            }
            else{
                $validation = $request->validate([
                    'nombre' => ['required', 'string'],
                    'apellido' => ['required', 'string'],
                    'email' => ['required', 'string', 'email', 'max:255', 'unique:users' ,'regex:/^[a-zA-z0-9._-]+@\w+\.[com]+/'],
                    'password' => ['required', 'string'],
                    'password2' => ['required', 'string', 'same:password'],
                ]);
                if($validation){
                    $user->nombre = $request->nombre;
                    $user->apellido = $request->apellido;
                    $user->email = $request->email;
                    $user->password = Hash::make($request->password);
                    $user->save();
                    return redirect()->route('admin_lista_usuarios');
                }
            }
        }
    }

    public function crear_usuario(Request $request){
        $validation = $request->validate([
            'nombre' => ['required', 'string'],
            'apellido' => ['required', 'string'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users', 'regex:/^[a-zA-z0-9._-]+@\w+\.[com]+/'],
            'password' => ['required', 'string'],
            'password2' => ['required', 'string', 'same:password'],
        ]);
        if($validation){
            if(Auth()->user()->id == 1){
                $user=new User();
                $user->nombre = $request->nombre;
                $user->apellido = $request->apellido;
                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $user->vuelo_id = null;
                $user->is_verified=1;
                $rol=Role::find($request->rol);
                $user->role()->associate($rol)->save();
                $pedido=new Pedido();
                $pedido->total=0;
                $pedido->usuario()->associate($user)->save();
            }
            else{
                $user=new User();
                $user->nombre = $request->nombre;
                $user->apellido = $request->apellido;
                $user->email = $request->email;
                $user->password = Hash::make($request->password);
                $user->vuelo_id = null;
                $user->is_verified=1;
                $rol=Role::find(2);
                $user->role()->associate($rol)->save();
                $pedido=new Pedido();
                $pedido->total=0;
                $pedido->usuario()->associate($user)->save();

            }
            $usuarios = User::all();
            return redirect("/home/lista_usuarios")->with("usuarios",$usuarios);
        }
    }

    public function crear_producto(Request $request){
        $validation = $request->validate([
            'nombre' => ['required', 'string'],
            'fecha_cad' => ['required'],
            'precio' => ['required'],
            'description' => ['required', 'string'],
            'stock' => ['required'],
            'calorias' => ['required'],
            'peso' => ['required'],
            'hidratos' => ['required'],
            'azucares' => ['required'],
            'proteinas' => ['required'],
            'sal' => ['required'],
            'ingredientes' => ['required', 'string'],
            'origen' => ['required', 'string'],
        ]);
        if($validation){
            $producto=new Producto();
            $categoria=Categoria::find($request->categoria);
            $marca=Marca::find($request->marca);
            $producto->nombre = $request->nombre;
            $producto->fecha_cad = $request->fecha_cad;
            $producto->precio = $request->precio;
            $producto->descripcion = $request->description;
            $producto->stock = $request->stock;
            $producto->calorias = $request->calorias;
            $producto->peso = $request->peso;
            $producto->hidratos = $request->hidratos;
            $producto->azucares = $request->azucares;
            $producto->proteinas = $request->proteinas;
            $producto->sal = $request->sal;
            $producto->ingredientes = $request->ingredientes;
            $producto->origen = $request->origen;
            $producto->marca()->associate($marca);
            $producto->categoria()->associate($categoria);
            $producto->save();
            $productos = Producto::all();
            return redirect('/home/lista_productos')->with(['productos' => $productos]);
        }
    }

    public function crear_categoria(Request $request){
        $validation = $request->validate([
            'nombre' => ['required', 'string', 'unique:categorias'],
        ]);
        if($validation){
            $categoria=new Categoria();
            $categoria->nombre = $request->nombre;
            $categoria->save();
            $categorias = Categoria::all();
            return redirect('/home/lista_categorias')->with(['categorias' => $categorias]);
        }
    }

    public function crear_marca(Request $request){
        $validation = $request->validate([
            'nombre' => ['required', 'string', 'unique:marcas'],
        ]);
        if($validation){
            $marca=new Marca();
            $marca->nombre = $request->nombre;
            $marca->save();
            $marcas = Marca::all();
            return redirect('/home/lista_marcas')->with(['marcas' => $marcas]);
        }
    }

    public function crear_vuelo(Request $request){
        $validation = $request->validate([
            'aeropuerto_ori' => ['required', 'string'],
            'aeropuerto_des' => ['required', 'string', 'different:aeropuerto_ori'],
            'cantidad_pasajeros' => ['required', 'integer'],
            'compañia' => ['required', 'string'],
            'fecha' => ['required', 'date'],
            'precio' => ['required', 'integer'],
        ]);
        if($validation){
            $vuelo=new Vuelo();
            $aeropuertos = Aeropuerto::all();
            $vuelo->aeropuerto_origen = $request->aeropuerto_ori;
            $vuelo->aeropuerto_destino = $request->aeropuerto_des;
            $vuelo->cantidad_pasajeros = $request->cantidad_pasajeros;
            $vuelo->compañia = $request->compañia;
            $vuelo->fecha = $request->fecha;
            $vuelo->precio = $request->precio;
            $vuelo->save();
            $vuelos = Vuelo::all();
            return redirect('/home/lista_vuelos')->with(['vuelos' => $vuelos]);
        }
    }

    public function mostrarCrearUsuario(){
            $roles=Role::all();
            return view("vistas_admin.crear_usuario")->with(['roles' => $roles]);
    }

    public function mostrarCrearproducto(){
        $marcas=Marca::all();
        $categorias=Categoria::all();
        return view("vistas_admin.crear_producto" , ["marcas" => $marcas , "categorias" => $categorias]);
    }

    public function mostrarCrearcategoria(){
        return view("vistas_admin.crear_categoria");
    }

    public function mostrarCrearmarca(){
        return view("vistas_admin.crear_marca");
    }

    public function mostrarCrearvuelo(){
        $aeroupertos=Aeropuerto::all();
        return view("vistas_admin.crear_vuelo" , ["aeropuertos" => $aeroupertos]);
    }

    public function mostrarRecuperar(){
        if(Auth()->user()->id == 1){
            $usuarios = User::onlyTrashed()->get();
        }
        else{
            $usuarios = User::onlyTrashed()
            ->where('role_id', 2)
            ->get();
        }
        return view('vistas_admin.recuperar_usuarios')->with("usuarios",$usuarios);
    }

    public function recuperar($id){
        $usuario=User::onlyTrashed()->find($id);
        $usuario->restore();
        return redirect('/home/lista_usuarios');
    }

    public function borrar_del_todo($id){
        $file = 'public/profile/' . $id;
        if(Storage::exists($file)){
            Storage::deleteDirectory($file);
        }
        $usuario=User::onlyTrashed()->find($id);
        $usuario->forceDelete();
        return redirect()->route('admin_lista_usuarios_mostrar_recuperar');
    }
}