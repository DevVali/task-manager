<?php

declare(strict_types=1);

use Lemon\Terminal;

Terminal::command("server", function() {
    Terminal::out("<div class='text-yellow'>Dev server started at https://localhost:8000</div>");

    if (strtoupper(substr(PHP_OS, 0, 3)) === "WIN") {
        exec("start /B php -S localhost:8000 -t public");
        exec("start /B yarn run mix watch &");
    } else {
        exec("php -S localhost:8000 -t public &");
        exec("yarn run mix watch &");
    }
}, "Starts server with mix watch");
