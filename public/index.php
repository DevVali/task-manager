<?php

use Lemon\Http\Request;

/** @var \Lemon\Kernel\Application $application */
$application = include __DIR__."/../init.php";

$application->add(Request::class, Request::capture()->injectApplication($application));
$application->alias("request", Request::class);

$application->boot();
