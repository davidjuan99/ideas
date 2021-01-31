<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NoteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [NoteController::class,'index']);
Route::get('/home', [NoteController::class,'mostrarNotas']);
Route::post('/eliminar', [NoteController::class, 'eliminarNota']);
Route::post('/crearNota', [NoteController::class, 'crearNota']);
Route::get('/actualizar/{id}', [NoteController::class, 'meterNotaForm']);
Route::put('/modificar/{id}', [NoteController::class, 'modificarNota']);
