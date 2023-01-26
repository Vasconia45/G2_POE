@extends('layouts.app')

@section('content')
    <script type="text/javascript">
        function unselect() {
            document.querySelectorAll('[name=categoria]').forEach((x) => x.checked = false);
            document.querySelectorAll('[name=marca]').forEach((x) => x.checked = false);
        }
    </script>
    <div class="p-5">
        <h1 style="text-align: center">Lista productos</h1>
        <div class="row">
            <div class="p-5" style="text-align: center">
                <div>
                    <h4>Busca los productos que te interesen</h4>
                </div>
                <div>
                    <form method="get" action="{{ route('buscar.productos') }}">
                        <input type="text" name="texto" class="col-2">
                        <div>
                            @foreach ($categorias as $categoria)
                                <input type="radio" class="m-2" value="{{ $categoria->id }}" name="categoria"
                                    id="{{ $categoria->id }}"><label for="{{ $categoria->id }}">{{ $categoria->nombre }}</label>
                            @endforeach
                        </div>
                        <div>
                            @foreach ($marcas as $marca)
                                <input type="radio" class="m-2" value="{{ $marca->id }}" name="marca"
                                    id="{{ $marca->id . 'm' }}"><label for="{{ $marca->id . 'm' }}">{{ $marca->nombre }}</label>
                            @endforeach
                        </div>
                        <div class="mb-2 mt-2"style="text-align: center;">
                            <button type="submit" class="btn"
                            style="background-color: #CCB26B;">Buscar</button>
                        </div>
                    </form>
                    <div style="text-align: center">
                        <button id="unselect" class="btn"
                        style="background-color: #CCB26B;"onclick="unselect()">Deseleccionar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            @foreach ($productos as $producto)
                <div class="col-3 mt-5">
                    <div class="card" style="width: 100%;">
                        <img class="card-img-top p-2" src="{{ URL('assets/img/' . $producto->nombre . '.jpg') }}"
                            alt="Error en la foto">
                        <div class="card-body">
                            <div>
                                <p>Nombre:{{ $producto->nombre }}</p>
                                <p>Fecha caducidad:{{ $producto->fecha_cad }}</p>
                                <p>Precio:{{ $producto->precio }}</p>
                                <p>Descripcion:{{ $producto->descripcion }}</p>
                                <p>Categoria:{{ $producto->categoria->nombre }}</p>
                                <p>Marca:{{ $producto->marca->nombre }}</p>
                                <form action="{{ route('productos_comprar',[$producto->id])}}" method="post">
                                    <div style="text-align: center">
                                        @csrf
                                        @method("post")
                                        <button type="submit" class="btn"
                                            style="background-color: #CCB26B;">Comprar</button>
                                    </div>
                                </form>
                            </div>
                            <hr>
                            <div>
                                <h3>Caracteristicas</h3>
                                <div class="d-flex p-2 gap-2">
                                    <div class=col-4>
                                        <p>Hidratos:{{ $producto->hidratos }}</p>
                                        <p>Azucares:{{ $producto->azucares }}</p>
                                        <p>Proteinas:{{ $producto->proteinas }}</p>
                                    </div>
                                    <div class="col-4">
                                        <p>Sal:{{ $producto->sal }}</p>
                                        <p>Origen:{{ $producto->origen }}</p>
                                        <p>Ingredientes:{{ $producto->ingredientes }}</p>
                                    </div>
                                    <div class="col-4">
                                        <p>Calorias:{{ $producto->calorias }}</p>
                                        <p>Peso:{{ $producto->peso }}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>Comentarios</h3>
                                <table class="table borderless">
                                    <tr>
                                        <td>Usuario</td>
                                        <td>Comentario</td>
                                        <td>Puntuaje</td>
                                    </tr>
                                @foreach ($producto->comentarios as $comentario)
                                    <tr>
                                        <td>{{ $comentario->usuario->nombre }}</td>
                                        <td>{{ $comentario->texto }}</td>
                                        <td>{{ $comentario->puntuacion }}</td>
                                    </tr>
                                @endforeach
                                </table>
                                <div class="p-2">
                                    <form action="{{ route('productos_comentar',[$producto->id])}}" method="post">
                                        @csrf
                                        <label>{{ auth()->user()->nombre }}:</label><input type="text" name="comentario" id="comentario">
                                        <select name="puntuacion" id="puntuacion">
                                            @for ($i=1;$i<=10;$i++)
                                                <option>{{ $i }}</option>
                                            @endfor
                                        </select>
                                        <button type="submit" class="btn"
                                            style="background-color: #CCB26B;">Comentar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
