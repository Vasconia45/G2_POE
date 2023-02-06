<?php
namespace App\Http\Controllers;
use App\Http\Requests\ValidarDatos;
use App\Models\User;
use App\Models\Vuelo;
use App\Models\Categoria;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
class UsuarioController extends Controller
{
    public function destroy($id)
    {
        $usuario= User::find($id);
        $usuario->delete();
        return redirect("/");
    }
    public function update($id,Request $request){
        $user=User::find($id);
        if($request->password == null || $request->file == null){
            if($request->password == null){
                dd("pass null and file not null");
            }
        }
        else{
            dd("pass and file null");
        }
        /*if($request->password == null){
            $validation = $request->validate([
                'nombre' => ['required', 'string'],
                'apellido' => ['required', 'string'],
            ]);
            if($validation){
                $user->nombre = $request->nombre;
                $user->apellido = $request->apellido;
                $user->save();
            }
        }
        else{
            $validation = $request->validate([
                'nombre' => ['required', 'string'],
                'apellido' => ['required', 'string'],
                'password' => ['required', 'string'],
                'password2' => ['required', 'string', 'same:password'],
            ]);
            if($validation){
                $user->nombre = $request->nombre;
                $user->apellido = $request->apellido;
                $user->password = Hash::make($request->password);
                $user->save();
            }
        }*/
        /*$img = $request->file('file')->store('public');
        $url = Storage::url($img);
        $user->imagen = $url;*/
        $value = $request->password;
        dd($value);
        return redirect()->route('modificar.cuenta')->with(['usuario' => Auth::user()]);
    }
    public function mostrarUpdate($id){
        $usuario = User::find($id);
        return view("vistas_usuario.actualizar_datos_usuario")->with(['usuario' => $usuario]);
    }
    public function index(){
        $usuario = Auth::user();
        $prueba = Categoria::all()->random(3);
        return view("vistas_usuario.modificarCuenta")->with(['usuario' => $usuario, 'pruebas' => $prueba]);
    }
    public function mostrar_vuelos(){
        $vuelos = Vuelo::all();
        return view("vistas_usuario.lista_vuelos")->with(['vuelos' => $vuelos]);
    }
}