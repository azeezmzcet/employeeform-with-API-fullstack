<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\EmployeeController;

Route::get('/empform', [EmployeeController::class, 'index']);
Route::post('/empform', [EmployeeController::class, 'store']);
Route::get('/empform/{id}', [EmployeeController::class, 'show']);
Route::put('/empform/{id}', [EmployeeController::class, 'update']);
Route::delete('/empform/{id}', [EmployeeController::class, 'destroy']);

