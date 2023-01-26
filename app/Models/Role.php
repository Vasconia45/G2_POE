<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'tipo'
    ];

    public function usuarios(){
        return $this->hasMany('App\Models\User');
    }
}
