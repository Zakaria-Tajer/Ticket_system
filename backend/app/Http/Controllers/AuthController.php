<?php

namespace App\Http\Controllers;

use App\Models\Clients;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'username' => 'required|string',
            'email' => 'required|string|unique:clients,email',
            'password' => 'required|string',
            'passwordConfirmation' => 'required|string',

        ]);

        // var_dump($request->file('image')->move(public_path('images')));
        $client = Clients::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),
            'passwordConfirmation' => bcrypt($fields['passwordConfirmation']),

        ]);

        $token = $client->createToken('myapptoken')->plainTextToken;
        echo $token;
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $client = Clients::where('email', $request->email)->first();

        $token = $client->createToken('myapptoken')->plainTextToken;



        if (!$client || !Hash::check($request->password, $client->password)) {
            return response([
                'message' => 'error idk'
            ], 401);
        } else {

            if ($client['role'] == 'admin') {
                return array(
                    "role" => "admin",
                    "token" => $token
                );
            } else {
                return array(
                    "role" => "client_User",
                    "token" => $token
                );
            }
        }
    }
}
