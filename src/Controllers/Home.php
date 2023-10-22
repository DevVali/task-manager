<?php

namespace App\Controllers;

use Lemon\Templating\Template;

class Home
{
	public function handle(): Template
	{
		return template("app.home");
	}
}
