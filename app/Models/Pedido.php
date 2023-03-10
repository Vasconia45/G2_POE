<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'total',
        'usuario_id'
    ];

    public function usuario(){
        return $this->belongsTo('App\Models\User');
    }

    public function productos(){
        return $this->belongsToMany('App\Models\Producto','pedido_producto',"pedido_id","producto_id")->withPivot('cantidad');
    }
}
