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
        # code...
        
        $request->validate([
            'email'=>['required','email'],
            'password' => ['required'],
            'device_name' => ['required']
        ]);
       

        // $user = User::where('email', $request->email)->first();

        // if(! $user || ! Hash::check ($request->password, $user->password)){
        //     throw ValidationException::withMessages([
        //             'email'=>['The provided credentials are incorrect.']
        //         ]);
        // }
       
        if(Auth::attempt($request->only('email','password'))) {
            return response()->json(Auth::user(),200);
        }
        throw ValidationException::withMessages([
            'email'=>['The provided credentials are incorrect.']
        ]);

        //return $user->createToken($request->device_name)->plainTextToken;
    }
}
