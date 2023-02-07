<?php
namespace App\Http\Controllers;
use App\Http\Requests\ValidarDatos;
use App\Models\User;
use App\Models\Vuelo;
use App\Models\Categoria;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
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
        if($request->password == null && $request->file == null){
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
        else if($request->password != null && $request->file != null){
            $validation = $request->validate([
                'nombre' => ['required', 'string'],
                'apellido' => ['required', 'string'],
                'password' => ['required', 'string'],
                'password2' => ['required', 'string', 'same:password'],
                'file' => ['required', 'image', 'max:2048','mimes:png,jpg,jpeg'],
            ]);
            if($validation){
                $image = $request->file('file');
                $image->move(public_path("storage/profile/" . $id), $image->getClientOriginalName());
                $user->nombre = $request->nombre;
                $user->apellido = $request->apellido;
                $user->password = Hash::make($request->password);
                $user->file = $image->getClientOriginalName();
                $user->save();
            }
        }
        else{
            if($request->password == null && $request->file != null){
                $validation = $request->validate([
                    'nombre' => ['required', 'string'],
                    'apellido' => ['required', 'string'],
                    'file' => ['required', 'image', 'max:2048', 'mimes:png,jpg,jpeg'],
                ]);
                if($validation){
                    $image = $request->file('file');
                    $image->move(public_path("storage/profile/" . $id), $image->getClientOriginalName());
                    $user->nombre = $request->nombre;
                    $user->apellido = $request->apellido;
                    $user->file = $image->getClientOriginalName();
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
            }
        }
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