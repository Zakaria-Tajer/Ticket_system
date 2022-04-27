<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Clients extends Model
{
    use HasApiTokens,HasFactory;
    
    protected $fillable = [
        'username', 'email', 'password', 'passwordConfirmation'
    ];
    
}
