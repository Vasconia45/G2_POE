@extends('layouts.app')
@section('styles')
<script src="{{ asset('js/adminValidation.js')}}"></script>
<link rel="stylesheet" href="{{ asset('css/userDatos.css') }}">
@endsection
@section('content')
<div class="mt-4 d-flex flex-column text-center align-items-center">
<h1>@lang("messages.Create brand")</h1>
    <form method="POST" action="{{ route('Admin_crear_marca') }}"
        class="d-flex flex-column align-items-center mt-2 col-lg-5 col-md-7 col-10">
        @csrf
        <div class="row col-7">
            <div class="form-floating mt-2">
                <input id="nombre" type="text" class="@error('nombre') is-invalid @enderror" name="nombre" placeholder="@lang('messages.Name')" value="{{ old('nombre') }}" autofocus>
                @error('nombre')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
        <div id="marDiv"></div>
        <button type="submit" class="btn mt-2 adminValidation" name="marcaBtn" style="background:#cdb46c;">
            @lang('messages.Create')
        </button>
    </form>
</div>
@endsection