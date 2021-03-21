<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;


class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        # code...
        
        $request->validate([
            'email'=>['required','email'],
            'password' => ['required']
        ]);

        if(Auth::guard('user')->atttempt(array( 'email' => $request->email,'password' => $request->password))) {
            //return response()->json(Auth::user(),200);
           dd('ok'); 
        }
        throw ValidationException::withMessages([
            'email'=>['The provided credentials are incorrect.']
        ]);
    }
}
