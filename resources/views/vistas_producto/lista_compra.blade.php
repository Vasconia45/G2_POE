@extends('layouts.app')

@section('content')
    <div class="p-5">
        <h1 class="text-align-center">Lista compra</h1>
        <div class="row">
            @foreach ($pedido->productos as $producto)
                <div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio por unidad</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio total de la unidadades</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ $producto->nombre }}</td>
                                <td>{{ ($producto->precio) }}</td>
                                <td>{{ $producto->pivot->cantidad }}</td>
                                <td>{{ ($producto->precio)*($producto->pivot->cantidad) }}</td>
                            </tr>
            @endforeach
                          </tbody>
                    </table>
                    <br><br>
                    <h2>Precio total de todos los productos:{{ $precio_total }}</h2>
        </div>
    </div>
    </div>
@endsection
