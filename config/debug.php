<?php

declare(strict_types=1);

use Lemon\Debug\Style;
use Lemon\Env;

return [
    "dumper" => [
        "style" => new Style(),
    ],
    "debug" => Env::get("DEBUG"),
];
