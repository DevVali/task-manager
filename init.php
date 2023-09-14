<?php

include __DIR__."/vendor/autoload.php";

use Lemon\Protection\Middlwares\Csrf;
use Lemon\Kernel\Application;

$application = new Application(__DIR__);

$application->loadServices();

$application->loadZests();

$application->loadHandler();

$application->get("config")->load();

/** @var \Lemon\Routing\Router $router */
$router = $application->get("routing");

$router->file("routes.web")
    ->middleware(Csrf::class)
;

return $application;
