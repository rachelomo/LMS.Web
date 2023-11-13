<?php

use App\Http\Controllers\Api\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("list-students", [ApiController::class, "listStudents"]);
Route::get("single-student/{id}", [ApiController::class, "getSingleStudent"]);
Route::post("add-student", [ApiController::class, "CreateStudent"]);
Route::put("update-student", [ApiController::class, "UpdateStudent"]);
Route::delete("delete-student", [ApiController::class, "deleteStudent"]);
