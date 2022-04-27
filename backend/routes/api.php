<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\TicketsResController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::group(['midlleware' => ['auth:sanctum']], function () {
    Route::get('/getCategories', [SearchController::class, 'getCategories']);
    Route::get('/allTickets', [TicketController::class, 'allTickets']);
    Route::get('/closedTicket', [TicketController::class, 'closedTicket']);
    
    Route::post('/search', [SearchController::class, 'search']);
    Route::post('/Create', [SearchController::class, 'Create']);
    Route::post('/createTicket', [TicketController::class, 'insertTicket']);
    Route::post('/Tickets', [TicketController::class, 'getTicket']);
    Route::post('/DeleteTicket', [TicketController::class, 'deleteTicket']);
    Route::post('/ClosingTickets', [TicketController::class, 'closingTickets']);
    Route::post('/getUniqueIds', [TicketController::class, 'getUniqueId']);
    Route::post('/Respond', [TicketsResController::class, 'getResponse']);
    Route::post('/TicketsAnsewerd', [TicketsResController::class, 'ResponseTickets']);
});