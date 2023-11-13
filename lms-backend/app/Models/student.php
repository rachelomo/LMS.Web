<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    protected $fillable =["username", "email", "phone_no", "gender", "age"];
    use HasFactory;
}
