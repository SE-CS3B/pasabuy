<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;


class LoginController extends Controller
{
    //
    public function login(Request $request)
    {
        # code..
        $request->validate([
            'email'=>['required','email'],
            'password' => ['required'],
            'device_name' => ['required']
        ]);
       
        $user = Auth::attempt($request->only('email','password'));
        if ($user) {
            return response()->json(Auth::user(),200);
        }
        throw ValidationException::withMessages([
            'email'=>['The provided credentials are incorrect.']
        ]);
    }
}
