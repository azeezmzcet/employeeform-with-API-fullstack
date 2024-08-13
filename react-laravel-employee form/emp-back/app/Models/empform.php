<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class empform extends Model
{
    use HasFactory;

    protected $fillable = ['card','name', 'phone', 'address','email','location','city'];
}
