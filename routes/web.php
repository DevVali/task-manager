<?php

use App\Controllers\Welcome;
use Lemon\Route;

Route::get("/", [Welcome::class, "handle"]);
Route::redirect("welcome", "/");

Route::template("/about", "about");
