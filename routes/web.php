<?php

use App\Controllers\Home;
use App\Controllers\Projects;
use App\Controllers\Views;
use Lemon\Route;

Route::redirect("/home", "/");

Route::get("/", [Home::class, "handle"]);

Route::get("/projects", [Projects::class, "handle"]);
Route::get("/views", [Views::class, "handle"]);
Route::template("/about", "about");
