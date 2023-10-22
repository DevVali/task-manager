<?php

use App\Controllers\Home;
use Lemon\Route;

Route::get("/home", [Home::class, "handle"]);

Route::template("/about", "about");
